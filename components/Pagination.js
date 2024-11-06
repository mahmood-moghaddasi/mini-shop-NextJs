import styles from "./Pagination.module.css";

function Pagination({ page, setPage, totalPages }) {
  const pageHandler = (event) => {
    if (event.target.className.includes("disable")) return;
    setPage(event.target.value);
  };

  return (
    <div className={styles.container}>
      <button
        value={3}
        className={
          totalPages < 3
            ? styles.disable
            : page == 3
            ? styles.selected
            : styles.unSelected
        }
        onClick={pageHandler}
      >
        ۳
      </button>
      <button
        value={2}
        className={
          totalPages < 2
            ? styles.disable
            : page == 2
            ? styles.selected
            : styles.unSelected
        }
        onClick={pageHandler}
      >
        ۲
      </button>
      <button
        value={1}
        className={
          totalPages < 1
            ? styles.disable
            : page == 1
            ? styles.selected
            : styles.unSelected
        }
        onClick={pageHandler}
      >
        ۱
      </button>
    </div>
  );
}

export default Pagination;
