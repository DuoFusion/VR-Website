const TapTop = () => {
  const executeScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <a href="#" className="back-to-top" onClick={executeScroll}>
      <i className="fas fa-angle-up" />
    </a>
  );
};

export default TapTop;
