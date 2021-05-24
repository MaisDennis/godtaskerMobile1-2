/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo } from 'react';
import { ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import CheckBox from '@react-native-community/checkbox';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
// import Button from '~/components/Button';
import {
  AsideView, AlignBottomView, AlignView,
  AlignDatesView, AlignDetailsView, AlignCheckBoxView,
  AcceptButton, AcceptButtonView,
  BackButton,
  BodyView, BodyWrapper,
  ButtonView, ButtonText, BottomHeaderView,
  BellIcon, ButtonIcon, ButtonWrapper,
  CenterView,
  ConfirmButton, ConfirmIcon, CheckBoxView, Container,
  CameraButton,
  DescriptionView, DescriptionBorderView, DescriptionSpan,
  DatesAndButtonView, DueTimeView, DueTime, DetailsView,
  FormScrollView,
  HeaderView, HrLine,
  IconsView,
  Image, ImageView, ImageWrapper, InnerStatusView,
  Label, LabelInitiated, LabelEnded, LeftView,
  ModalView, ModalText, MessageButton, MiddleHeaderView, MainHeaderView,
  NameText,
  OuterStatusView,
  RejectTaskInput, RejectButton, RightView,
  StartTimeView, StartTime,
  TopHeaderView, TagView, TitleView, TaskIcon,
  TitleText, TaskAttributesView, ToWorkerView, ToText, TitleIcon,
  TitleBorderView, TitleTextModal,
  UnreadMessageCountText, UserView, UserImage, UserImageBackground,
} from './styles';
import { updateTasks } from '~/store/modules/task/actions';
import api from '~/services/api';
// import message from '../../store/modules/message/reducer';
// import firebase from '~/services/firebase'
// -----------------------------------------------------------------------------
const taskAttributesArray = [ 'baixa', 'média', 'alta', '-']
const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(parseISO(fdate), "dd'-'MMM'-'yyyy", { locale: pt });

const formattedDateTime = fdate =>
  fdate == null
    ? '-'
    : format(parseISO(fdate), "dd'-'MMM'-'yyyy HH:mm", { locale: pt });

export default function Task({ data, navigation, taskConditionIndex }) {
  const dispatch = useDispatch();
  const task_id = data.id;
  const userData = data.user
  const dueDate = parseISO(data.due_date);
  const endDate = parseISO(data.end_date);
  const subTasks = data.sub_task_list

  const [toggleTask, setToggleTask] = useState();
  const [toggleModal, setToggleModal] = useState(false);
  const [togglePhotoModal, setTogglePhotoModal] = useState();
  const [toggleConfirmModal, setToggleConfirmModal] = useState(false);
  const [rejectTaskInputValue, setRejectTaskInputValue] = useState();
  const [updateStatus, setUpdateStatus] = useState();
  const [messageBell, setMessageBell] = useState();
  const[statusResult, setStatusResult] = useState(0);
  const [ sendingIndicator, setSendingIndicator ] = useState();

  useEffect (() => {
    handleMessageBell()
  }, [data])

  useMemo(() => {
    return handleStatus()
  }, [updateStatus]);

  async function handleMessageBell() {
    // const response = await api.get(`messages/${data.message_id}`)
    // setMessageBell(response.data.messages)

    const unsubscribe = firestore()
      .collection(`messages/task/${data.id}`)
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        try {
          const data = querySnapshot.docs.map(d => ({
            ...d.data(),
          }));
          // lastMessageRef.current.scrollToEnd({ animated: false })
          setMessageBell(data)
        }
        catch {
          console.log('Error from querySnapshot')
        }

      })
    return unsubscribe;
  }

  async function handleStatus() {
    let weige = 0;
    subTasks.map(s => {
      if(s.complete === true) {
        weige = weige + s.weige_percentage
      }
    })

    const response = await api.put(`tasks/${data.id}`, {
      status_bar: Math.round(weige)
    })
    setStatusResult(response.data.status_bar)
    // return Math.round(weige);
    return;
  }

  const pastDueDate = () => {
    let flag = false;
    new Date() > dueDate ? flag = true : flag = false
    return flag
  }

  const endPastDueDate = () => {
    let flag = false;
    endDate > dueDate ? flag = true : flag = false
    return flag
  }

  async function updateBell(editedSubTaskList) {
    await api.put(`tasks/${data.id}`, {
      sub_task_list: editedSubTaskList
    })
  }

  function handleToggleTask() {
    setToggleTask(!toggleTask)
    if(hasUnread(data.sub_task_list) !== 0) {
      const editedSubTaskList = data.sub_task_list
      editedSubTaskList.map(e => {
        e.worker_read = true
      })
      updateBell(editedSubTaskList)
    }
  }

  async function handletoggleCheckBox(value, position) {
    const editedSubTaskList = data.sub_task_list
    editedSubTaskList[position].complete = value
    editedSubTaskList[position].user_read = false

    await api.put(`tasks/${data.id}`, {
      sub_task_list: editedSubTaskList,
    })
    dispatch(updateTasks(new Date()))
    setUpdateStatus(new Date())
  }

  function handleMessage() {
    navigation.navigate('MessagesConversationPage', {
      id: data.id,
      user_id: data.user.id,
      user_name: data.user.user_name,
      worker_id: data.worker.id,
      worker_name: data.worker.worker_name,
      worker_phonenumber: data.workerphonenumber,
      message_id: data.message_id,
      messages: data.messages,
      avatar: data.user.avatar,
    });
  }

  function handleConfirm() {
    if(data.confirm_photo) {
      // navigation.navigate('Confirm', {
      //   task_id: data.id, taskName: data.name
      // });
      setTogglePhotoModal(!togglePhotoModal)
    } else {
      setToggleConfirmModal(!toggleConfirmModal)
    }
  }

  async function handleConfirmWithoutPhoto() {
    await api.put(`tasks/confirm/${data.id}`);
    setToggleConfirmModal(!toggleConfirmModal)
    dispatch(updateTasks(new Date()))
  }

  async function handleToggleAccept() {
    // setToggleAccept(!toggleAccept)
    await api.put(`tasks/${data.id}/notification/worker`, {
      status: {
        status: 2,
        comment: `Accepted on ${new Date()}`,
      },
      initiated_at: new Date(),
    })
    dispatch(updateTasks(new Date()))
  }

  async function handleCancelTask() {
    await api.put(`tasks/${data.id}/notification/worker`, {
      status: {
        status: 4,
        canceled_by: "worker",
        comment: `Declined. Comment: ${rejectTaskInputValue}`,
      },
      canceled_at: new Date(),
    });
    setToggleModal(!toggleModal)
    dispatch(updateTasks(new Date()))
  }

  const hasUnread = (array) => {
    try {
      let sum = 0;
      for(let i = 0; i < array.length; i++) {
        if(array[i].worker_read === false) {
          sum += 1
        }
      }
      return sum
    } catch(error) {
      return
    }
  }

  async function takePhotoFromCamera() {
    setTogglePhotoModal(!togglePhotoModal)
    setToggleTask(!toggleTask)
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(async image => {
      console.log(image)
      const formData = new FormData();
      formData.append('signatureImage', {
        uri: Platform.OS === 'ios' ? image.sourceURL : image.path,
        // uri: image.path,
        // type: "image/jpg",
        type: "image/jpg",
        name: `signature_${task_id}.jpg`,
      });
      setSendingIndicator(!sendingIndicator)
      try {

        const response = await api.post('signatures', formData);

        const { signature_id } = response.data;

        await api.put(`tasks/confirm/${task_id}`, {
          signature_id,
        });
        setSendingIndicator(false)
        Alert.alert(
          'Success!',
          'Photo sent!',
          [
            {
              text: 'OK',
              // onPress: () => console.log('OKBJ')
            }
          ],
          {cancelable: false }
        )
      }
      catch {
        setSendingIndicator(false)
        Alert.alert(
          'Error: Not able to send photo',
          'Please try again',
          [
            {
              text: 'OK',
              // onPress: () => console.log('OKBJ')
            }
          ],
          {cancelable: false }
        )
        setTogglePhotoModal(!togglePhotoModal)
      }
    })
  }

  async function chooseFromLibrary() {
    // console.warn('choose Photo')
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(async image => {
        console.log(image.path)
        const formData = new FormData();
        formData.append('signatureImage', {
          // uri: Platform.OS === 'ios' ? image.sourceURL : image.path,
          uri: image.path,
          type: Platform.OS === 'ios' ? "image/*" : "image/jpg",
          // type: "image/jpg",
          // type: "image/*",
          name: `signature_${task_id}.jpg`,
        });

        try {
          setSendingIndicator(!sendingIndicator)
          const response = await api.post('signatures', formData);

          const { signature_id } = response.data;

          await api.put(`tasks/confirm/${task_id}`, {
            signature_id,
          });
          setSendingIndicator(!sendingIndicator)
          Alert.alert(
            'Success!',
            'Photo sent!',
            [
              {
                text: 'OK',
                onPress: () => console.log('OKBJ')
              }
            ],
            {cancelable: false }
          )
          setTogglePhotoModal(!togglePhotoModal)

        }
        catch {
          Alert.alert(
            'Error: Not able to send photo',
            'Please try again',
            [
              {
                text: 'OK',
                // onPress: () => console.log('OKBJ')
              }
            ],
            {cancelable: false }
          )
          setTogglePhotoModal(!togglePhotoModal)
        }
      });

    }
  // -----------------------------------------------------------------------------
  return (
    <Container
      taskConditionIndex={taskConditionIndex}
      onPress={handleToggleTask}
    >
      <LeftView>
        { userData === undefined || userData.avatar === null
          ? (
            <UserImage/>
            // <SenderText>Hi</SenderText>
          )
          : (
            <UserImageBackground>
              <UserImage source={{ uri: userData.avatar.url }}/>
            </UserImageBackground>
          )
        }
      </LeftView>

      <BodyView>
        <BodyWrapper>
          <ToWorkerView>
            <TitleIcon name="eye"/>
            <ToText numberOfLines={1}>{data.user.user_name}</ToText>
            <TitleIcon name="briefcase"/>
            <NameText numberOfLines={1}>{data.worker.worker_name}</NameText>
          </ToWorkerView>
          <TitleView>
            <TitleText numberOfLines={2}>{data.name}</TitleText>
          </TitleView>

          <DatesAndButtonView>
            <TagView>
              { data.initiated_at
                ? (
                  <LabelInitiated>Started</LabelInitiated>
                )
                : (
                  <Label>Received</Label>
                )
              }
            </TagView>
            <TagView>
              { data.end_date
                ? (
                  <>
                    <LabelEnded pastDueDate={pastDueDate()}>Ended:</LabelEnded>
                    <DueTimeView pastDueDate={endPastDueDate()}>
                      <DueTime>{formattedDate(data.end_date)}</DueTime>
                    </DueTimeView>
                  </>
                )
                : (
                  <>
                    <Label>Due:</Label>
                    <DueTimeView pastDueDate={pastDueDate()}>
                      <DueTime>{formattedDate(data.due_date)}</DueTime>
                    </DueTimeView>
                  </>
                )
              }
            </TagView>
          </DatesAndButtonView>
          <BottomHeaderView>
            <OuterStatusView>
              <InnerStatusView
                statusResult={statusResult}
                colors={['#ffdd33', '#ff892e']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={{ width: `${statusResult}%`}}
              ></InnerStatusView>
            </OuterStatusView>
            <StartTime>{statusResult}%</StartTime>
          </BottomHeaderView>
        </BodyWrapper>
      </BodyView>

      <RightView>
        { (hasUnread(data.sub_task_list) === 0)
          ? (
            null
          )
          : (
            <BellIcon name="bell">
              <UnreadMessageCountText>{hasUnread(data.sub_task_list)}</UnreadMessageCountText>
            </BellIcon>
          )
        }
        { (hasUnread(messageBell) === 0)
          ? (
            null
          )
          : (
            <BellIcon name="message-circle">
              <UnreadMessageCountText>{hasUnread(messageBell)}</UnreadMessageCountText>
            </BellIcon>
          )
        }
      </RightView>
{/* ------------------------------------------------------------------------ */}
      <Modal isVisible={toggleTask}>

        <ModalView>
        <FormScrollView
          // contentContainerStyle={styles.alignItems}
        >
          <CenterView>

            <TitleBorderView>
              <TitleIcon name="clipboard"/>
              <TitleTextModal>{data.name}</TitleTextModal>
            </TitleBorderView>
          </CenterView>

          <DescriptionView>
          <Label>Sub-items</Label>
          <DescriptionBorderView pastDueDate={pastDueDate()}>
            { data.sub_task_list.map((s, index) => (
              <AlignCheckBoxView key={index}>
                <CheckBoxView>
                    <CheckBox
                      disabled={false}
                      value={s.complete}
                      onValueChange={
                        (newValue) => handletoggleCheckBox(newValue, index)
                      }
                      disabled={true}
                    />
                    <DescriptionSpan>{s.weige_percentage}%</DescriptionSpan>
                    <DescriptionSpan type="check-box">{s.description}</DescriptionSpan>
                </CheckBoxView>
              </AlignCheckBoxView>
            ))}
          </DescriptionBorderView>
        </DescriptionView>

        <AlignDetailsView>
            <DetailsView>
              <TagView>
                <Label>Start Date:</Label>
                { data.initiated_at
                  ? (
                    <>

                      <StartTimeView>
                        <StartTime>{formattedDate(data.initiated_at)}</StartTime>
                      </StartTimeView>
                    </>
                  )
                  : (
                    <>

                      <StartTimeView initiated={data.initiated_at}>
                        <StartTime>{formattedDate(data.start_date)}</StartTime>
                      </StartTimeView>
                    </>
                  )
                }
              </TagView>
            </DetailsView>
            <DetailsView>
              <TagView>
                <Label>Due Date & Time:</Label>
                { data.end_date !== null
                  ? (
                    <DueTimeView style={{backgroundColor:'#f5f5f5'}}>
                      <DueTime>{formattedDateTime(data.due_date)}</DueTime>
                    </DueTimeView>
                  )
                  : (
                    <DueTimeView pastDueDate={pastDueDate()}>
                      <DueTime>{formattedDateTime(data.due_date)}</DueTime>
                    </DueTimeView>
                  )
                }
              </TagView>
            </DetailsView>
            { data.end_date !== null &&
              (
                <DetailsView>
                  <TagView>
                    <Label>Ended:</Label>
                    <DueTimeView pastDueDate={endPastDueDate()}>
                      <DueTime>{formattedDateTime(data.end_date)}</DueTime>
                    </DueTimeView>
                  </TagView>
                </DetailsView>
              )
            }
            <DetailsView>
              <TagView>
                <Label>Priority:</Label>
                <TaskAttributesView taskAttributes={data.task_attributes[0]-1}>
                  <DueTime>{taskAttributesArray[JSON.stringify(data.task_attributes[0]-1)]}</DueTime>
                </TaskAttributesView>
              </TagView>
            </DetailsView>
            <DetailsView>
              <TagView>
                <Label>Urgency:</Label>
                <TaskAttributesView taskAttributes={data.task_attributes[1]-1}>
                  <DueTime>{taskAttributesArray[data.task_attributes[1]-1]}</DueTime>
                </TaskAttributesView>
              </TagView>
            </DetailsView>
            <DetailsView>
              <TagView>
                <Label>Complexity:</Label>
                <TaskAttributesView taskAttributes={data.task_attributes[1]-1}>
                  <DueTime>{taskAttributesArray[data.task_attributes[1]-1]}</DueTime>
                </TaskAttributesView>
              </TagView>
            </DetailsView>

            <DetailsView>
              <TagView>
                <Label>Confirmation with photograph?</Label>
                <ToText>Sim</ToText>
              </TagView>
            </DetailsView>
          </AlignDetailsView>

          <DescriptionView>
            {/* <HrLine/> */}
            <Label>Obs.</Label>
            <DescriptionBorderView pastDueDate={pastDueDate()}>
              <DescriptionSpan>{data.description}</DescriptionSpan>
            </DescriptionBorderView>
          </DescriptionView>
          { data.status && data.status.status !== 1
            ? (
              <IconsView>
                <ButtonView onPress={handleMessage}>
                  <ConfirmButton >
                    <TaskIcon name="message-square"/>
                  </ConfirmButton>
                </ButtonView>
                { taskConditionIndex === 1
                  ? (
                    <ButtonView onPress={handleConfirm}>
                      <ConfirmButton>
                        <ConfirmIcon name="check"/>
                      </ConfirmButton>
                    </ButtonView>
                  )
                  : (
                    <ButtonView>
                      <ConfirmButton>
                        <ButtonIcon name="trash-2" style={{color: '#ccc'}}/>
                      </ConfirmButton>
                    </ButtonView>
                  )
                }
              </IconsView>
            )
            : (
              <AcceptButtonView>
                <ModalText>Accept this task?</ModalText>
                <ButtonWrapper>
                  { taskConditionIndex === 1
                    ? (
                      <>
                        <ButtonView onPress={handleToggleAccept}>
                          <AcceptButton>
                            <ButtonText>Accept</ButtonText>
                          </AcceptButton>
                        </ButtonView>
                        <ButtonView onPress={() => setToggleModal(!toggleModal)}>
                          <RejectButton>
                          <ButtonText>Decline</ButtonText>
                          </RejectButton>
                        </ButtonView>
                      </>
                    )
                    : (
                      null
                    )
                  }
                </ButtonWrapper>
              </AcceptButtonView>
            )
          }
          { data.signature &&
            <ImageWrapper>
              <Label>Confirmation Photo:</Label>
              <ImageView>
                <Image source={{ uri: data.signature.url }}/>
              </ImageView>
            </ImageWrapper>
          }
          <DescriptionView>
            <BackButton onPress={handleToggleTask}>
              <ButtonText>Back</ButtonText>
            </BackButton>
          </DescriptionView>

          <Modal isVisible={toggleModal}>
            <ModalView>
              <ModalText>Are you sure you wish to decline this task?</ModalText>
              <RejectTaskInput
                placeholder="Comentário"
                value={rejectTaskInputValue}
                onChangeText={setRejectTaskInputValue}
                mutiline={true}
              />
              <DatesAndButtonView>
                <ButtonView onPress={handleCancelTask}>
                  <AcceptButton>
                    <ButtonText>Yes</ButtonText>
                  </AcceptButton>
                </ButtonView>
                <ButtonView onPress={() => setToggleModal(!toggleModal)}>
                  <RejectButton>
                  <ButtonText>Back</ButtonText>
                  </RejectButton>
                </ButtonView>
              </DatesAndButtonView>
            </ModalView>
          </Modal>

          <Modal isVisible={toggleConfirmModal}>
            <ModalView>
              <ModalText>Confirm and end this task?</ModalText>
                {/* <DescriptionBorderView pastDueDate={pastDueDate()}> */}
                {/* </DescriptionBorderView> */}
              <DatesAndButtonView>
                <ButtonView onPress={handleConfirmWithoutPhoto}>
                  <AcceptButton>
                    <ButtonText>Yes</ButtonText>
                  </AcceptButton>
                </ButtonView>
                <ButtonView onPress={() => setToggleConfirmModal(!toggleConfirmModal)}>
                  <RejectButton>
                    <ButtonText>Back</ButtonText>
                  </RejectButton>
                </ButtonView>
              </DatesAndButtonView>
            </ModalView>
          </Modal>

          <Modal isVisible={togglePhotoModal}>
          <ModalView>
            <ModalText>Choose photo from:</ModalText>
            <DatesAndButtonView>
              <ButtonView onPress={() => chooseFromLibrary()}>
                <AcceptButton>
                  <ButtonText>Reel</ButtonText>
                </AcceptButton>
              </ButtonView>
              <ButtonView onPress={() => takePhotoFromCamera()}>
                <CameraButton>
                  <ButtonText>Camera</ButtonText>
                </CameraButton>
              </ButtonView>
            </DatesAndButtonView>
            <DatesAndButtonView>
              <ButtonView onPress={() => setTogglePhotoModal(!togglePhotoModal)}>
                <RejectButton>
                  <ButtonText>Back</ButtonText>
                </RejectButton>
              </ButtonView>
            </DatesAndButtonView>
            </ModalView>
          </Modal>

        </FormScrollView>
        </ModalView>

      </Modal>

      <Modal isVisible={sendingIndicator}>
          <ModalView>
            <ModalText>Sending...</ModalText>
            <ActivityIndicator size="small" color="#000"/>
          </ModalView>
      </Modal>
    </Container>
  );
}
