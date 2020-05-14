const myChannel = [
    {
        title: "JavaScript",
        Author: "Debajit",
        Description: "Good"

    },
    {
        title: "C++",
        Author: "Debajit",
        Description: "Very Good"

    }
]

myChannel.forEach((index, value) => {
    console.log(index.title, value + 1);

})