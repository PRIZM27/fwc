import {useState} from 'React';


// data needed to generalize this hook
  // 1) page number
  // 2) amount of items to show per page

const usePagination = (pageNumber, itemsPerPage, dataSet) => { 

const [page, setPage] = useState(0);

// dataSet parameter used just to calculate item count per page
// const totalPages = services.length / 4;
const totalPages = dataSet.length / 4;


const handlePageClickPrev = (e) => {
  console.log(page, 'current page');
  console.log(totalPages, 'total pages');

  // if user on first page and clicks prev button, cycle to the last page
  if (page === 1) {
    setPage(totalPages);
    return;
  }

  // if there is a previous page e.g. 2 / 3
  // what constitutes previous page?
  // if the current page is not equal to 1
  if (page !== 1) {
    // decrement the page number by 1
    setPage((prevPage) => prevPage - 1);
  }

  // const slicedServices = services.slice(page - 1, (page * 4));
};

const handlePageClickNext = (e) => {
  console.log('Next button clicked');

  // last page and no more pages after
  if (page === totalPages) {
    setPage(1);
    return;
  }
  // default case
  setPage((prevPage) => prevPage + 1);
};


}

export default usePagination