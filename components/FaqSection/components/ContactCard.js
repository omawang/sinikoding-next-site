import { MdPhone, MdLocationOn, MdMail } from 'react-icons/md'

import {
  Inner,
  Column,
  Title,
  SubTitle,
  ContactItem,
  ContactIcon,
  ContactInfo,
} from './ContactCard.elements'
const ContactCard = () => {
  return (
    <Inner>
      <Column>
        <Title>Ada pertanyaan lain?</Title>
        <SubTitle>Yuk, langsung hubungi SiniKoding</SubTitle>
      </Column>
      <Column>
        <ContactItem>
          <ContactIcon>
            <MdPhone color="white" size={24} />
          </ContactIcon>
          <ContactInfo>+628-9941-1112-9</ContactInfo>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <MdMail color="white" size={24} />
          </ContactIcon>
          <ContactInfo>sinikoding@gmail.com</ContactInfo>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <MdLocationOn color="white" size={24} />
          </ContactIcon>
          <ContactInfo>
            {'Kedungwonokerto, \nPrambon, Sidoarjo, Jawa Timur'}
          </ContactInfo>
        </ContactItem>
      </Column>
    </Inner>
  )
}

export default ContactCard
