/**
 * Url Bar & Get Video Button
 * @param {*} param0
 * @returns
 */
function NavBar({ onChangeGetVideo, setInput }) {
  return (
    <nav className="navbar">
      <h1>Youtube URL</h1>
      <input
        className="input"
        name="url"
        onChange={(ev) => {
          setInput(ev.target.value);
        }}
      />
      <button className="button" onClick={onChangeGetVideo}>
        GET VIDEO
      </button>
    </nav>
  );
}
export default NavBar;
