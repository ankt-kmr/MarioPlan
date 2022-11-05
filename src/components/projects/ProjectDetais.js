import { useParams } from 'react-router-dom';

const ProjectDetais = () => {
    const { id } = useParams()

    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>
                        Project Title - {id}
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit voluptate culpa obcaecati iusto doloremque distinctio. Animi voluptatem quas dolor similique cumque molestiae eveniet. Dolorum ex voluptas eum omnis illum.
                    </p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Poated by the Programmer. </div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetais
