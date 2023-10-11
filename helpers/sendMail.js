import emailjs from '@emailjs/browser';
export const sendMail = (data) => {
  emailjs
    .send('service_aqremtx', 'template_0dr38nt', data, 'r75MYcI_ssXVm6fT7')
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
