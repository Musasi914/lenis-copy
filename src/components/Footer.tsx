export default function Footer() {
  return (
    <footer className="footer text-black">
      <div className="container">
        <div className="footer-text h-screen py-10">
          <h2 className="footer-title notable text-[8vw] flex flex-col justify-between h-full">
            <span>
              Lenis is
              <br />
              <span className="text-primary">Open Source</span>
            </span>
            <span className="self-end items-end text-right">& open to features and sponsors</span>
          </h2>
        </div>
      </div>
    </footer>
  );
}
