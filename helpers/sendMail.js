import emailjs from '@emailjs/browser';
export const sendMail = (data) => {
  emailjs
    .send('service_qcg9pjr', 'template_nutfavh', data, '-ts76TKVn7MQnAZoy')
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
