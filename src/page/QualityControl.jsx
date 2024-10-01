import '../../assets/style/qcontrol.css';
import '../../assets/style/utilities.css';

import Certificate from '../components/Certificate';
import Facility from '../components/Facility';
import { Helmet } from 'react-helmet';


export default function QualityControl() {
  return (
    <>

      <Helmet>
        <title>Quality Control | Accurate Measurement Instruments for Precision Manufacturing</title>
        <meta name="description" content="Take advantage of our advanced measuring instrument facility for precise and accurate measurements. Ensure top quality in your manufacturing processes with our reliable tools" />
      </Helmet>



      <main>
        <Facility />
        <Certificate />
      </main>

    </>
  )
}