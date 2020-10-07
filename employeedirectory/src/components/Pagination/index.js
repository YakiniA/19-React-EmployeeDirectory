import React from 'react'

 function Pagination({postsPerPage, totalPosts}){

    const pageNumbers = [];

     console.log("Math.ceil" +Math.ceil(totalPosts/postsPerPage));
    for(let i=1 ; i<= Math.ceil(totalPosts/postsPerPage) ; i++){
        pageNumbers.push(i);

    }
    return (
        <div>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(pageNumber => (
                   <li key={pageNumber} className="page-item">
                        <a href={pageNumber} className = "page-link">
                            {pageNumber}
                        </a>
                   </li>
                ))}

            </ul>

        </div>
    )
}

export default Pagination;