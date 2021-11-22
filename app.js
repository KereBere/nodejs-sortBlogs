let blogs = [
    { title: 'State Management in JS.', author: 'KittyCoder' },
    { title: 'Why not to use Bootstrap ?', author: 'CSSGuy' },
    { title: 'Coding sucks for beginners.', author: 'LazyPanda' },
    { title: 'Flutter web will take over."Based & Biased!"', author: 'FluterLover' },
];
const arguments = process.argv.slice(2);



function printBlogs() {
    blogs.forEach(element => {
        console.log(element);
    })
}


const addBlog = (newBlog, kalbek) => {
    printBlogs();
    blogs.push(newBlog);
    kalbek();
}

addBlog({ title: 'Why you need to preverse?', author: 'WorkHardGuy' }, printBlogs)