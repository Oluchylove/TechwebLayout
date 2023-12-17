import Style from '../project/project.module.css';
import Image from 'next/image';
import Product1 from '../../Assets/finance1.jpg';
import Product3 from '../../Assets/finance2.jpg';
import Product2 from '../../Assets/industry2.jpg';
import { relative } from 'path';
export default function Project() {
    return(
    <>
    <div className={Style.projectWrapper}>
        <div className={Style.ProjectHead}>
            <p className={Style.projectTitle}>OUR SERVICES</p>
            <p className={Style.projectTitleMain}>We're Proud of Our Products</p>
        </div>
        <div className={Style.projectArea}>
            <div style={{display:"flex 1"}}>
                <Image src={Product1} height={600} width={600} alt='finance'/>
            </div>
            <div style={{display:"flex 2", position:"relative"}}>
            <Image src={Product2} height={300} width={600} alt='finance'/>
                <button className={Style.imgBtn1}>Our Works</button>
            </div>
            <div  style={{display:"flex 1"}}>
            <Image src={Product3} height={600} width={600} alt='finance'/>

            </div>
        </div>
    </div>
    </>
    )
}