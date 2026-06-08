# Feature Specification - Contact Page

## Overview
The Contact page enables clients to view office hours, find the physical location in B-17 Islamabad, call/WhatsApp directly, or submit an online inquiry.

## Contact Information

### 1. Hours & Appointments
* **Days & Hours**:
  * Monday through Wednesday: 9:00 AM – 9:00 PM
  * Thursday: Closed (or typical weekly off-peak)
  * Friday: 9:00 AM – 12:00 PM, 4:00 PM – 9:00 PM (break for Friday prayers)
  * Saturday: 9:00 AM – 6:00 PM
  * Sunday: Closed

### 2. Location
* **Address**: B-17, Islamabad, Pakistan.
* **Map integration**: A clean embedded mockup or link to Google Maps pointing to Sector B-17, Islamabad.

### 3. Contact Channels
* **Phone & WhatsApp**: 0331-7383800
* **Email**: smartsolar.security@gmail.com
* **Quick Link**: Floating "Chat on WhatsApp" widget.

### 4. Interactive Inquiry Form
An online form letting users request a custom quote:
* **Fields**:
  * Name (text, required)
  * Phone Number (tel, required)
  * Email Address (email, optional)
  * Service Requested (select dropdown: "Hybrid Solar Setup", "CCTV Security Network", "Battery Backup/Upgrade", "Net Metering Consultation", "Other")
  * Message (textarea, required)
* **Submit Action**: Visual success feedback toast on submission.

## Interface Design Specs
* **Layout**: Two-column layout split on desktop:
  * **Left Side**: Office hours, phone, email, and social links in clean glass cards.
  * **Right Side**: Styled interactive inquiry form with modern outline focus animations.
* **Mobile Adaptability**: Single column, with critical CTA (direct call/WhatsApp) prioritized at the top.
