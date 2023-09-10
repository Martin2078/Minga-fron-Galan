import React, { useState, useEffect } from 'react'

const MangaDetail = ({manga,chapters,id}) => {
    return (
      <div className=''>
      <MangaCover title={manga?.title} cover_photo={manga?.cover_photo} categories={manga?.category_id.name} />
      <EmojisDataManga />
      <ButtonManga {...{ showChapters, setShowChapters }} />
      <Content
        {...{
          manga,
          chapters,
          hasPrevPage,
          hasNextPage,
          showChapters,
          onPageChange: setCurrentPage, // Pasa setCurrentPage como onPageChange
        }}
      />
      </div>
    )
  }
  
  export default MangaDetail