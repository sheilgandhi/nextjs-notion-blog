function PostCard({ post }){
    const tags = post.tag;
    // console.log(tags)

    return (
        <div className="w-sm rounded overflow-hidden shadow-xl cursor-pointer m-4 hover:scale-110">
            <img className="w-full h-72 object-cover" src={post.image} alt={post.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">{post.title}</div>
            </div>
            <div className="px-6 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tags && tags[0]}</span>
                {
                    tags && tags[1] &&
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tags[1]}</span>
                }
                {
                    tags && tags[2] &&
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tags[2]}</span>
                }
            </div>
        </div>
    );
}

export default PostCard