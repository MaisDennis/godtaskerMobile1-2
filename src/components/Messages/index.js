import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native'
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import firestore from '@react-native-firebase/firestore';
// -----------------------------------------------------------------------------
import {
  Container, LeftDoubleView, LeftView,
  AlignView, Image, BodyView, MainView, TitleView, TitleIcon, TitleWrapper,
  TitleText, SenderText, LastMessageView, LastMessageText, RightView,
  LastMessageTimeView, LastMessageTimeText,
  MessageIcon, UnreadMessageCountText, UserImageBackgroundView, WorkerImageBackgroundView,
} from './styles'
import { updateForwardMessage, updateMessagesRequest } from '~/store/modules/message/actions';
import api from '~/services/api';

export default function Messages({ data, navigation }) {
  const worker_id = useSelector(state => state.worker.profile.id);
  const forwardValue = useSelector(state => state.message.forward_message.message);
  const updatedMessage = useSelector(state => state.message.profile)
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile)
  const userIsWorker = worker_id === data.worker_id;
  const messageWorkerId = data.worker_id;
  const messageUserId = data.user_id;

  const [resetConversation, setResetConversation] = useState();
  const [messageBell, setMessageBell] = useState();
  const [lastMessage, setLastMessage] = useState();
  const [lastMessageTime, setLastMessageTime] = useState();

  const senderUserName = data.user.user_name;
  const senderWorkerName = data.worker.worker_name;
  const workerData = data.worker
  const userData = data.user

  const messagesRef = firestore()
  .collection(`messages/task/${data.id}`)
  // const messageArrayLength = data.messages.length;
  // const lastMessage = data.messages[messageArrayLength-1] ? data.messages[messageArrayLength-1].message : "";
  // const lastMessageTime = data.messages[messageArrayLength-1] ? (data.messages[messageArrayLength-1].timestamp).slice(-20, ) : "";

  useEffect(() => {
    getMessages()
  }, [updatedMessage])
  // console.log(data)
  const messageId = data.message_id;

  const formattedMessageDate = fdate =>
  fdate == null
    ? ''
    : format(fdate, "dd'/'MMM'/'yyyy HH:mm", { locale: ptBR });



  async function getMessages() {
    // const messageResponse = await api.get(`messages/${messageId}`)
    // setMessage(messageResponse.data)
    // setMessageBell(messageResponse.data.messages)

    // const messagesLength = messageResponse.data.messages.length
    // console.log(messagesLength)

    // const last_message = messageResponse.data.messages[0]
    //   ? messageResponse.data.messages[messagesLength-1].message
    //   : null
    // setLastMessage(last_message)

    // const last_message_time = messageResponse.data.messages[0]
    //   ? messageResponse.data.messages[messagesLength-1].timestamp
    //   : null
    // setLastMessageTime(last_message_time)

    const unsubscribe = messagesRef
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map(d => ({
          ...d.data(),
        }));
        // console.log(data)
        // setMessage(messageResponse.data)
        setMessageBell(data)
        let messagesLength = data.length

        const last_message = data[0]
          ? data[messagesLength-1].message
          : null
        setLastMessage(last_message)

        const last_message_time = data[0]
          ? data[messagesLength-1].timestamp
          : null
        setLastMessageTime(last_message_time)
        // console.log(last_message_time)
        // lastMessageRef.current.scrollToEnd({ animated: false })
      })
      return unsubscribe;
  }

  async function handleMessageConversation() {
    messagesRef
      .orderBy('createdAt')
      .get().then(resp => {
        // console.log(resp.docs)
        resp.forEach(doc => {
          doc.ref.update({worker_read: true})
        })
      })

    let newMessage = null
    let editedMessages = messageBell;
    if (forwardValue) {
      const message_id = Math.floor(Math.random() * 1000000)
      // editedMessages.push({
      //   "id": message_id,
      //   "message": forwardValue,
      //   "sender": `${userIsWorker ? 'worker' : 'user'}`,
      //   "user_read": `${userIsWorker ? false : true }`,
      //   "worker_read": `${userIsWorker ? true : false }`,
      //   "timestamp": formattedMessageDate(new Date()),
      //   "forward_message": true,
      // })
      newMessage = {
        id: message_id,
        message: forwardValue,
        sender: `${userIsWorker ? "worker" : "user"}`,
        user_read: userIsWorker ? false : true,
        worker_read: userIsWorker ? true : false,
        timestamp: formattedMessageDate(new Date()),
        reply_message: '',
        reply_sender: '',
        forward_message: true,
        visible: true,
        createdAt: firestore.FieldValue.serverTimestamp(),
      }

      await messagesRef
      .doc(`${message_id}`).set(newMessage)
      .then(() => {
        // console.log(userIsWorker)
        if (userIsWorker) {
          api.put(`messages/${messageId}/worker`, {
            messages: newMessage,
            task_id: data.id,
            task_name: data.name,
            user_id: messageUserId,
            user_name: user.user_name,
            worker_id: messageWorkerId,
          });
        } else {
          api.put(`messages/${messageId}/user`, {
            messages: newMessage,
            task_id: data.id,
            task_name: data.name,
            user_id: messageUserId,
            user_name: user.user_name,
          });
        }
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      });


      dispatch(updateForwardMessage(null));
    }

    if (userIsWorker) {
      editedMessages.map((m) => {
        if(m.worker_read === false) {
          m.worker_read = true;
        }
        return m
      })
    } else {
      editedMessages.map((m) => {
        if(m.user_read === false) {
          m.user_read = true;
        }
        return m
      })
    }

    // await api.put(`messages/update/${data.message_id}`, {
    //   messages: editedMessages,
    // })
    // dispatch(updateMessagesRequest(new Date()))

    navigation.navigate('MessagesConversationPage', {
      id: data.id,
      user_id: data.user.id,
      user_name: data.user.user_name,
      worker_id: data.worker.id,
      worker_name: data.worker.worker_name,
      worker_phonenumber: data.workerphonenumber,
      message_id: data.message_id,
      messages: messageBell,
      avatar: workerData.avatar,
    });
    setResetConversation();

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
    }
    catch(error) { return }
  }

  const hasUnreadUser = (array) => {
    try {
      let sum = 0;
      for(let i = 0; i < array.length; i++) {
        if(array[i].user_read === false) {
          sum += 1
        }
      }
      return sum
    }
    catch(error) { return }
  }
  // ---------------------------------------------------------------------------
  return (
    <>
      <TouchableOpacity onPress={handleMessageConversation}>
        <Container>
          { (userIsWorker)
            ? (
              <LeftDoubleView>
                <AlignView>
                  { userData === undefined || userData.avatar === null
                    ? (
                      <WorkerImageBackgroundView>
                        <Image/>
                        {/* <SenderText>Hi</SenderText> */}
                      </WorkerImageBackgroundView>
                    )
                    : (
                      <WorkerImageBackgroundView>
                        <Image source={{ uri: userData.avatar.url }}/>
                      </WorkerImageBackgroundView>
                    )
                  }
                </AlignView>
              </LeftDoubleView>
            )
            : (
              <LeftView>
                <AlignView>
                  { workerData === undefined || workerData.avatar === null
                    ? (
                      <UserImageBackgroundView>
                        <Image/>
                        {/* <SenderText>Hello</SenderText> */}
                      </UserImageBackgroundView>

                    )
                    : (
                      <UserImageBackgroundView>
                        <Image source={{ uri: workerData.avatar.url }}/>
                      </UserImageBackgroundView>
                    )
                  }
                </AlignView>
              </LeftView>
            )
          }
          <BodyView>
            <MainView>
              <TitleView>
                {/* <TitleWrapper>
                  <TitleIcon name="clipboard" colorProp={worker_id === data.worker_id}/>
                  <TitleText colorProp={worker_id === data.worker_id}>{data.name}</TitleText>
                </TitleWrapper> */}
                { (worker_id === data.worker_id)
                  ? (
                    <SenderText>{senderUserName}</SenderText>
                  )
                  : (
                    <SenderText>{senderWorkerName}</SenderText>
                  )
                }
              </TitleView>
              <LastMessageView
                colors={['#fff', '#ddd']}
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                // style={{ width: `${statusResult}%`}}
              >
                { lastMessage && (
                  <LastMessageText>{lastMessage}</LastMessageText>
                )}
              </LastMessageView>
            </MainView>
            <RightView>
              <AlignView>
                <LastMessageTimeView>
                  { lastMessageTime && (
                    <LastMessageTimeText>{lastMessageTime}</LastMessageTimeText>
                  )}
                </LastMessageTimeView>
                {/* UnreadMessageCountView */}
                {(userIsWorker)
                  ? ((hasUnread(messageBell) === 0)
                    ? (
                      null
                    )
                    : (
                      <MessageIcon name="message-square">
                        <UnreadMessageCountText>{hasUnread(messageBell)}</UnreadMessageCountText>
                      </MessageIcon>
                    )
                  )
                  : ((hasUnreadUser(messageBell) === 0)
                    ? (
                      null
                    )
                    : (
                      <MessageIcon name="message-circle">
                        <UnreadMessageCountText>{hasUnreadUser(messageBell)}</UnreadMessageCountText>
                      </MessageIcon>
                    )
                  )
                }
              </AlignView>
            </RightView>
            {/* <HrLine/> */}
          </BodyView>
        </Container>
      </TouchableOpacity>
    </>
  )
}
