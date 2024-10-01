function Buttons( {className,href,src,alt} ){
    return( 
      <div className={className}>
         <a href={href} target='_blank'>
           <img src={src} alt={alt}  width={`100%`} />
         </a>
      </div>
    )
}

export default Buttons