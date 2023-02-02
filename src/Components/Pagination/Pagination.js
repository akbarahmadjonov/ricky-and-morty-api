import ReactPaginate from "react-paginate";

export const Pagination = ({ totalPage, setActivePageAttr, activePage }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center mt-5 gap-3"
      pageCount={totalPage}
      //   Barcha datadagi pagelarni chiqarib beradi
      previousLabel="Previous"
      nextLabel="Next"
      previousLinkClassName="btn btn-secondary"
      nextLinkClassName="btn btn-secondary"
      pageClassName="page-item rounded"
      pageLinkClassName="page-link rounded"
      activeClassName="active"
      //   Agar aktiv page 1 ga teng bo'lsa 0 ga tenglasin yoki aktiv pagedan 1 ni ayirsin
      forcePage={activePage === 1 ? 0 : activePage - 1}
      //   Page oz'garganda bitta bitta qo'shib beradi
      onPageChange={(data) => {
        setActivePageAttr(data.selected + 1);
      }}
    />
  );
};
