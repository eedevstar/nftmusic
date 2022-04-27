import 'react-datepicker/dist/react-datepicker.css'
import ReactDatePicker from 'react-datepicker'

export default function DatePicker(props) {
  return (
    <>
      <style>
        {
          `
            .react-datepicker {
              background: #FFFFFF;
              box-shadow: 20px 40px 72px rgba(0, 0, 0, 0.12), 14px 28px 48px rgba(0, 0, 0, 0.12), 6px 12px 12px rgba(0, 0, 0, 0.08), 1px 2px 4px rgba(0, 0, 0, 0.05);
              border-radius: 2px;
              border: 0;
            }
            .react-datepicker__header  {
              border: 0;
              background: #FFFFFF;
              padding: 8px 0 0;
            }
            .react-datepicker__today-button {
              border: 0;
              background: #FFFFFF;
            }
            .react-datepicker__navigation {
              top: 12px;
            }
            .react-datepicker__navigation--previous {
              left: 12px;
            }
            .react-datepicker__navigation--next {
              right: 12px;
            }
            .react-datepicker__today-button {
              padding-bottom: 20px;
            }
            .react-datepicker__navigation-icon::before {
              border-color: #1FAB3F;
            }
            .react-datepicker__navigation:hover *::before {
              border-color: #1FAB3F;
            }
            .react-datepicker__current-month {
              font-size: 14px;
              line-height: 20px;
              font-weight: 400;
              padding: 10px 0;
            }
            .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
              width: 45px;
              line-height: 45px;
              font-size: 14px;
            }
            .react-datepicker__time-container--with-today-button {
              border: 0;
            }
            .react-datepicker-time__header {
              padding: 10px 0 30px;
              font-size: 14px;
              font-weight: 400;
            }
            .react-datepicker__time-container--with-today-button {
              right: -85px;
            }
            .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
              line-height: 30px;
            }
          `
        }
      </style>
      <ReactDatePicker {...props} />
    </>
  );
}
