import Style from '../services/services.module.css'
import Health from '../../Assets/healthcare.jpg';
import Finance from '../../Assets/finance.jpg';
import Industry from '../../Assets/industry2.jpg';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';import Image from 'next/image';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FactoryIcon from '@mui/icons-material/Factory';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

export default function Services() {
    return(
        <>
        <div className={Style.serviceWrapper}>
            <div className={Style.ServiceHead}>
                <p className={Style.serviceTitle}>OUR SERVICES</p>
                <p className={Style.serviceTitleMain}>Best Industry Services</p>
            </div>

            <div className={Style.serviceImage}>
                
                <div className={Style.imageHolder}>
                    <Image src={Health} height={280} width={280} alt='healthcare'/>

                    <div className={Style.serviceCard}>
                        <div className={Style.cardTitle}>
                            <div className={Style.iconHolder}>
                                <MedicalInformationOutlinedIcon sx={{fontSize:'30px'}}/>
                            </div>
                            <div className={Style.titleText}>HealthCare</div>
                        </div>
                        <p className={Style.cardText}>AI and data technologies have become indispensable in solving..</p>
                        <hr/>
                        <div className={Style.cardLink}>
                            <a href='_blank'>
                                READ MORE <ArrowRightAltOutlinedIcon/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={Style.imageHolder}>
                <Image src={Finance} height={280} width={280} alt='Finance'/>
                <div className={Style.serviceCard}>
                        <div className={Style.cardTitle}>
                            <div className={Style.iconHolder}>
                                <AccountBalanceIcon sx={{fontSize:'30px'}}/>
                            </div>
                            <div className={Style.titleText}>HealthCare</div>
                        </div>
                        <p className={Style.cardText}>AI and data technologies have become indispensable in solving..</p>
                        <hr/>
                        <div className={Style.cardLink}>
                            <a href='_blank'>
                                READ MORE <ArrowRightAltOutlinedIcon/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={Style.imageHolder}>
                <Image src={Industry} height={280} width={280} alt='Industry'/>
                <div className={Style.serviceCard}>
                        <div className={Style.cardTitle}>
                            <div className={Style.iconHolder}>
                                <FactoryIcon sx={{fontSize:'30px'}}/>
                            </div>
                            <div className={Style.titleText}>HealthCare</div>
                        </div>
                        <p className={Style.cardText}>AI and data technologies have become indispensable in solving..</p>
                        <hr/>
                        <div className={Style.cardLink}>
                            <a href='_blank'>
                                READ MORE <ArrowRightAltOutlinedIcon/>
                            </a>
                        </div>
                    </div>
                </div>
                

            </div>
            <div className={Style.iconWrapper1}>
                <WestIcon/>
            </div>
            <div className={Style.iconWrapper}>
                <EastIcon/>
            </div>
        </div>
        </>
    )
}