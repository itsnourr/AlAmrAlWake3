import React, { useState } from 'react';
import MapContainer from './MapContainer';
import MapSideBar from './MapSideBar';
import PostAuthNavbar from '../Navigation/PostAuthNavbar';
import './MapView.css';

const newsByLoc = [
  {
    city: 'بيروت',
    coords: [33.8938, 35.5018],
    headlines: [
      "الأخير بسبب تأثيره السلبي على المعلمين",
      "مصادر حكومية تؤكد أن الأزمة الحالية تتطلب حلاً فورياً لمنع تفاقم الأوضاع الاقتصادية والمعيشية"
    ]
  },
  {
    city: 'طرابلس',
    coords: [34.4381, 35.8308],
    headlines: [
      "حركة مرور كثيفة عند تقاطع طريق جميل وتوصيات بإعادة تنظيم الإشارات لتفادي الحوادث",
      "افتتاح متحف تاريخي جديد يعرض قطعاً نادرة من العهد العثماني ويجذب الزوار من كل المناطق",
      "انقطاع تام للكهرباء في معظم أحياء طرابلس نتيجة عطل مفاجئ في محطة التغذية الرئيسية"
    ]
  },
  {
    city: 'صور',
    coords: [33.2700, 35.2033],
    headlines: [
      "انطلقت حملة تنظيف شاملة على الشاطئ بمشاركة متطوعين من المجتمع المحلي والمدارس الرسمية",
      "اكتشف فريق آثار دولي بقايا مدينة قديمة تضم معبداً ومقبرة ومجموعة من النقوش الحجرية"
    ]
  },
  {
    city: 'صيدا',
    coords: [33.5606, 35.3750],
    headlines: [
      "بلدية صيدا تعلن عن إقامة مهرجان ثقافي سنوي يتضمن عروضاً موسيقية ومأكولات تقليدية"
    ]
  },
  {
    city: 'زحلة',
    coords: [33.8947, 35.8623],
    headlines: [
      "أعلنت القوى السياسية في زحلة عن التوصل إلى اتفاق لوقف إطلاق النار بشكل دائم ونهائي",
      "تم تشكيل برلمان محلي جديد يضم ممثلين عن جميع الفئات والطوائف في المدينة",
      "استعدادات مكثفة لإجراء الانتخابات البلدية وسط مشاركة واسعة من الشباب والمجتمع المدني"
    ]
  },
  {
    city: 'بعلبك',
    coords: [34.0058, 36.2181],
    headlines: [
      "انطلقت أعمال ترميم معابد بعلبك الأثرية بهدف تعزيز السياحة والحفاظ على التراث الثقافي",
      "أسبوع ثقافي مميز يشمل عروضاً موسيقية وندوات فكرية ومعارض فنية في ساحة القلعة",
      "أزمة نقص المياه تتفاقم مع ازدياد الشكاوى من انقطاع متكرر في الأحياء السكنية"
    ]
  },
  {
    city: 'جونيه',
    coords: [33.9808, 35.6171],
    headlines: [
      "تنطلق سلسلة حفلات موسيقية دولية في جونية بمشاركة فنانين من العالم العربي وأوروبا",
      "تغييرات مفاجئة في حركة السير وإغلاق بعض الطرق لتحسين الانسياب المروري في المدينة"
    ]
  },
  {
    city: 'عليه',
    coords: [33.8106, 35.5972],
    headlines: [
      "اندلع حريق كبير بالقرب من الغابة وتمت السيطرة عليه بمشاركة الدفاع المدني والسكان",
      "باشرت البلدية تنفيذ مشروع ترميم المدرسة الرسمية بعد تدهور حالتها خلال السنوات الماضية"
    ]
  },
  {
    city: 'نبطية',
    coords: [33.3772, 35.4836],
    headlines: [
      "افتتاح مستشفى حديث في النبطية مجهز بأحدث التقنيات ويخدم عدداً كبيراً من القرى المجاورة"
    ]
  },
  {
    city: 'جبيل',
    coords: [34.1230, 35.6519],
    headlines: [
      "سجلت جبيل ارتفاعاً ملحوظاً في عدد السياح مع ازدياد الحجوزات في الفنادق والمطاعم المحلية",
      "تستمر أعمال ترميم مرفأ جبيل التاريخي لتحسين قدرته على استقبال القوارب والزوار",
      "انطلقت الحملات الانتخابية المحلية وسط منافسة قوية بين المرشحين ودعوات للشفافية",
      "يُقام مهرجان التراث في جبيل بمشاركة فرق فلكلورية ومعارض تعكس تاريخ المدينة العريق"
    ]
  }
];

const MapView = () => {

  // const [newsByLoc, setNewsByLoc] = useState([]); // To be uncommented out
  const [selectedLoc, setSelectedLoc] = useState(null);

  const [timeFilter, setTimeFilter] = useState(1);       // default last 1 day
  const [followFilter, setFollowFilter] = useState(false); // default show all, don't filter

  // Q2
  // useEffect(() => {
  //   axios.get('http://localhost:5120/newsByLoc') 
  //     .then(response => {
  //       setNewsByLoc(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching location-based news:", error);
  //     });
  // }, []);

  const handleMarkerClick = (loc) => {
    setSelectedLoc(loc);
  };

  const filteredNews = selectedLoc ? [selectedLoc] : newsByLoc;

  return (
    <div style={{ display: 'flex' }}>
      <MapContainer 
        newsByLoc={newsByLoc} 
        center={[33.8547, 35.8623]} 
        zoom={8} 
        onMarkerClick={handleMarkerClick}
      />
      <MapSideBar 
        newsByLoc={filteredNews} 
        timeFilter={timeFilter}
        followFilter={followFilter}
        onTimeFilterChange={setTimeFilter}
        onFollowFilterChange={setFollowFilter}
      />    
    </div>
  );
};

export default MapView;
