

const albumData = [
    { id: 1, title: 'Tea Leaves', image: 'tea_leaves.jpg' },
    { id: 2, title: 'Teapot', image: 'teapot.jpg' },
    { id: 3, title: 'Tea Cup', image: 'tea_cup.jpg' },
    // Add more album items as needed
  ];

export function AlbumPage(){
    return (
        <div className="album-container">
          {albumData.map(item => (
            <AlbumItem key={item.id} item={item} />
          ))}
        </div>
      );    

}