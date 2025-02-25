const Anchor = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...props}
    className={
      "text-base font-medium underline leading-tight xl:text-lg xl:leading-normal " +
      props.className
    }
  />
);

export default Anchor;
