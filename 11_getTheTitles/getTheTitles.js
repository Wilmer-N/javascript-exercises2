const getTheTitles = function() {
    const array = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]
      const titleArray = []
      array.forEach(book => {
        titleArray.push(book.title)
      });
      return titleArray
      

};
getTheTitles()

// Do not edit below this line
module.exports = getTheTitles;
