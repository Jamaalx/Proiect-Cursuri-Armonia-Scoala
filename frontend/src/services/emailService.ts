// src/services/emailService.ts
import emailjs from '@emailjs/browser';

// EmailJS configuration - replace with your actual credentials
const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_81pzwy8';
const EMAIL_TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || 'template_l1f1buh';
const EMAIL_TEMPLATE_BLOG_COMMENT = import.meta.env.VITE_EMAILJS_TEMPLATE_BLOG || 'template_l1f1buh';
const EMAIL_TEMPLATE_COURSE_REGISTRATION = import.meta.env.VITE_EMAILJS_TEMPLATE_COURSE || 'template_ff3w6ej';
const EMAIL_TEMPLATE_GENERAL_REGISTRATION = import.meta.env.VITE_EMAILJS_TEMPLATE_GENERAL || 'template_ff3w6ej';
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'r4pVmtLwPm1BLHbM9';

// Initialize EmailJS
emailjs.init(EMAIL_PUBLIC_KEY);

// Contact form data interface
export interface ContactFormData {
  nume: string;
  email: string;
  telefon: string;
  subiect: string;
  mesaj: string;
}

// Blog comment form data interface
export interface BlogCommentData {
  nume: string;
  prenume: string;
  subiect: string;
  mesaj: string;
  blogTitle?: string;
  blogId?: string;
}

// Course registration form data interface
export interface CourseRegistrationData {
  nume: string;
  prenume: string;
  telefon: string;
  email: string;
  varsta: string;
  selectedCourse: string;
  selectedOtherInstruments: string[];
  acceptTerms: boolean;
}

// General registration form data interface
export interface GeneralRegistrationData {
  nume: string;
  email: string;
  telefon: string;
  varsta: string;
  sediu: string;
  selectedCourses: string[];
  acceptTerms: boolean;
}

// Notification function - you can replace this with your preferred notification library
export const showNotification = (type: 'success' | 'error', message: string) => {
  // Simple implementation using alert - you can replace with toast library
  if (type === 'success') {
    alert(`✅ Succes: ${message}`);
  } else {
    alert(`❌ Eroare: ${message}`);
  }
  
  // Alternative: Use a more sophisticated notification system
  // Example with react-hot-toast (if you want to install it):
  // import toast from 'react-hot-toast';
  // if (type === 'success') {
  //   toast.success(message);
  // } else {
  //   toast.error(message);
  // }
};

// Contact form email
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'alex.mantello13@gmail.com',
      from_name: formData.nume,
      from_email: formData.email,
      phone: formData.telefon,
      subject: formData.subiect,
      message: formData.mesaj,
      reply_to: formData.email,
      form_type: 'Contact Form',
      timestamp: new Date().toLocaleString('ro-RO')
    };

    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_CONTACT,
      templateParams
    );

    console.log('Contact email sent successfully:', response.status);
    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
};

// Blog comment email
export const sendBlogCommentEmail = async (formData: BlogCommentData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'alex.mantello13@gmail.com',
      from_name: `${formData.nume} ${formData.prenume}`,
      subject: formData.subiect,
      message: formData.mesaj,
      blog_title: formData.blogTitle || 'Blog Post',
      blog_id: formData.blogId || 'N/A',
      form_type: 'Blog Comment',
      timestamp: new Date().toLocaleString('ro-RO')
    };

    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_BLOG_COMMENT,
      templateParams
    );

    console.log('Blog comment email sent successfully:', response.status);
    return true;
  } catch (error) {
    console.error('Failed to send blog comment email:', error);
    return false;
  }
};

// Course registration email
export const sendCourseRegistrationEmail = async (formData: CourseRegistrationData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'alex.mantello13@gmail.com',
      from_name: `${formData.nume} ${formData.prenume}`,
      from_email: formData.email,
      phone: formData.telefon,
      age: formData.varsta,
      selected_course: formData.selectedCourse,
      other_instruments: formData.selectedOtherInstruments.length > 0 
        ? formData.selectedOtherInstruments.join(', ') 
        : 'Nu a selectat alte instrumente',
      terms_accepted: formData.acceptTerms ? 'Da' : 'Nu',
      reply_to: formData.email,
      form_type: 'Înregistrare Curs Specific',
      timestamp: new Date().toLocaleString('ro-RO')
    };

    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_COURSE_REGISTRATION,
      templateParams
    );

    console.log('Course registration email sent successfully:', response.status);
    return true;
  } catch (error) {
    console.error('Failed to send course registration email:', error);
    return false;
  }
};

// General registration email
export const sendGeneralRegistrationEmail = async (formData: GeneralRegistrationData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'alex.mantello13@gmail.com',
      from_name: formData.nume,
      from_email: formData.email,
      phone: formData.telefon,
      age: formData.varsta,
      location: formData.sediu,
      selected_courses: formData.selectedCourses.join(', '),
      courses_count: formData.selectedCourses.length.toString(),
      terms_accepted: formData.acceptTerms ? 'Da' : 'Nu',
      reply_to: formData.email,
      form_type: 'Înregistrare Generală',
      timestamp: new Date().toLocaleString('ro-RO')
    };

    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_GENERAL_REGISTRATION,
      templateParams
    );

    console.log('General registration email sent successfully:', response.status);
    return true;
  } catch (error) {
    console.error('Failed to send general registration email:', error);
    return false;
  }
};

// Helper function to validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Helper function to validate Romanian phone number
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+40|0040|0)[0-9]{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};