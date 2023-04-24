const ShoppingCartIcon = (props: any) => {
  const defaultWidth = 20;
  const defaultHeight = 19;

  const { width: incomingWidth, height: incomingHeight, ...rest } = props;

  const width = incomingWidth ?? defaultWidth;
  const height = incomingHeight ?? defaultHeight;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1142 2.34375H4.07283L3.75091 0.710156C3.6696 0.297656 3.30539 0 2.88194 0H-0.807292C-1.05178 0 -1.25 0.196765 -1.25 0.439453V1.31836C-1.25 1.56105 -1.05178 1.75781 -0.807292 1.75781H2.15295L4.72044 14.784C4.31322 15.2051 4.0625 15.7764 4.0625 16.4062C4.0625 17.7007 5.11961 18.75 6.42361 18.75C7.72761 18.75 8.78472 17.7007 8.78472 16.4062C8.78518 15.9947 8.67593 15.5904 8.46807 15.2344H13.8236C13.6158 15.5904 13.5065 15.9947 13.507 16.4062C13.507 17.7007 14.5641 18.75 15.8681 18.75C17.1721 18.75 18.2292 17.7007 18.2292 16.4062C18.2292 15.7421 17.9504 15.143 17.5033 14.7165L17.5415 14.5423C17.6615 13.9944 17.2411 13.4766 16.6763 13.4766H6.26719L5.92077 11.7188H17.4461C17.8626 11.7188 18.2229 11.4306 18.3113 11.0265L19.9794 3.40935C20.0994 2.86154 19.679 2.34375 19.1142 2.34375ZM6.42361 17.2852C5.93538 17.2852 5.53819 16.8909 5.53819 16.4062C5.53819 15.9216 5.93538 15.5273 6.42361 15.5273C6.91184 15.5273 7.30903 15.9216 7.30903 16.4062C7.30903 16.8909 6.91184 17.2852 6.42361 17.2852ZM15.8681 17.2852C15.3798 17.2852 14.9826 16.8909 14.9826 16.4062C14.9826 15.9216 15.3798 15.5273 15.8681 15.5273C16.3563 15.5273 16.7535 15.9216 16.7535 16.4062C16.7535 16.8909 16.3563 17.2852 15.8681 17.2852ZM16.7327 9.96094H5.57435L4.41925 4.10156H18.0159L16.7327 9.96094Z"
        fill="#A7A9B2"
      />
    </svg>
  );
};

export default ShoppingCartIcon;
