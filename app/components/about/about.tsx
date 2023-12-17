import Style from '../about/about.module.css';
import Image from 'next/image';
import AiPerson from '../../Assets/AIperson.jpg';
import Blueliquid from '../../Assets/blueliquid.jpg';
import Blueliquid1 from '../../Assets/blueliquid1.jpg'
export default function About() {
    return(
        <>
        <div className={Style.header}>
            <div className={Style.aboutMain}>

                <div className={Style.imgWrapper}>
                    <Image src={AiPerson} height={'300'} width={'300'} alt='AIpersons'/>
                    <Image src={Blueliquid1} height={'180'} width={'180'} alt='Blueliquid' style={{position:"absolute", top:"100px", left:"255px"}}/>
                </div>

                <div className={Style.aboutText}>
                    <p className={Style.aboutTextHead}>OUR VISION</p>
                    <p className={Style.aboutTextMain}>Global Leader in AI and <br/>Data Technologies</p>
                    <div>
                    <p className={Style.aboutSubText}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem nulla! Facere et ratione distinctio incidunt, recusandae ipsam dolore quaerat exercitationem assumenda consectetur earum, hic labore, illo eius veritatis animi cum itaque repudiandae sequi magni officia. Porro consequuntur reprehenderit cumque nostrum dicta, quia ratione incidunt dolorum sint totam saepe exercitationem.
                    </p>
                    <p className={Style.aboutSubText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores enim quidem mollitia, asperiores beatae quod! Consequatur laudantium ratione necessitatibus illo quas repudiandae, nihil velit earum magni, similique nostrum doloribus!
                    </p>
                    </div>
                   
                </div>

            </div>
        </div>
        </>
    )
}