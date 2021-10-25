export const checkTotalResults: (page:number, totalResults:number)=>boolean=(page, totalResults)=>{
    return totalResults/page>10;
}

