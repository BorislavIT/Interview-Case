const BellIcon = (props: any) => {
  const defaultWidth = 23;
  const defaultHeight = 22;

  const { width: incomingWidth, height: incomingHeight, alert, setAlert, ...rest } = props;

  const width = incomingWidth ?? defaultWidth;
  const height = incomingHeight ?? defaultHeight;

  const handleBellOnClick = () => {
    if (setAlert) {
      setAlert(!alert);
    }
  };

  return (
    <svg
      className={`cursor-pointer`}
      onClick={handleBellOnClick}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M18.3984 16.1406C17.6562 15.3594 16.25 14.1094 16.25 10.125C16.25 7.07812 14.1406 4.65625 11.25 4.07031V3.25C11.25 2.54688 10.7031 2 10 2C9.29688 2 8.75 2.54688 8.75 3.25V4.07031C5.85938 4.65625 3.75 7.07812 3.75 10.125C3.75 14.1094 2.34375 15.3594 1.60156 16.1406C1.36719 16.4141 1.25 16.7266 1.25 17C1.25 17.625 1.75781 18.25 2.5 18.25H17.5C18.2422 18.25 18.75 17.625 18.75 17C18.75 16.7266 18.6328 16.4141 18.3984 16.1406ZM3.86719 16.375C4.72656 15.2812 5.625 13.4844 5.625 10.1641C5.625 10.125 5.625 10.125 5.625 10.125C5.625 7.70312 7.57812 5.75 10 5.75C12.4219 5.75 14.375 7.70312 14.375 10.125C14.375 10.125 14.375 10.125 14.375 10.1641C14.375 13.4844 15.2734 15.2812 16.1328 16.375H3.86719ZM10 22C11.3672 22 12.5 20.8672 12.5 19.5H7.5C7.5 20.8672 8.63281 22 10 22Z"
        fill="#A7A9B2"
      />
      {alert && (
        <>
          <rect x="12.125" y="1" width="9.5" height="9.5" rx="4.75" fill="#FFBE18" />
          <rect x="12.125" y="1" width="9.5" height="9.5" rx="4.75" stroke="white" strokeWidth="2" />
        </>
      )}
    </svg>
  );
};

export default BellIcon;
