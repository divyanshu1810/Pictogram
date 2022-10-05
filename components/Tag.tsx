
const Tag = ({title}:any) => {
    const getColor = () =>{
        let color
        switch(title){
            case 'Travel':
                color = 'rgb(210,138,138)'
            break;
            case 'Food':
                color = 'rgb(169,210,138)'
            break;
            case 'Family':
                color = 'rgb(138,173,138)'
            break;
            default:
                color = 'rgb(129,138,210)'

            }
            return color
    }
    return(
        <div style={{backgroundColor:getColor()}} className='tag'>{title}</div>
    )
}
export default Tag