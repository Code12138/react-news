const  collectionslist = collection.length
  ? userCollections.map((collection, index) => (
    <Card key={index} title={collection.uniquekey}
          extra={<Link to={`/news_detail/${collection.uniquekey}`}>查看</Link>}>
      <p>{collection.Title}</p>
    </Card>
  ))
  : '您还没有收藏任何的新闻，快去收藏一些新闻吧。'

const commentsList = comments.length
  ? comments.map((comment,index)=>(
    <Card key={index} title={`于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`}
          extra={<Link to={`/news_detail/${comment.uniquekey}`}>查看</Link>}>
      <p>{comment.Comments}</p>
    </Card>
  ))
  : '您还没有发表过任何评论。'
