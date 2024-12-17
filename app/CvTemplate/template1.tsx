// CVTemplate.tsx
import React,{useState, useEffect} from "react";
import { Page, Text, View, Document, StyleSheet,Font,Image } from "@react-pdf/renderer";



Font.register({
  family: "FontName",

  fonts: [
    { src: "AfacadFlux-Regular.ttf" },
    { src: "AfacadFlux-Light.ttf", fontWeight: "light" },
    { src: "AfacadFlux-Medium.ttf", fontWeight: "medium" },
    { src: "AfacadFlux-SemiBold.ttf", fontWeight: "semibold" },
  ],
});


const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    fontFamily: "FontName",
  },
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    width: "100%",
  },
  headerLeft: {
    height: "100%",
    width: "31%",
  },
  headerRight: {
    height: "100%",
    width: "69%",
  },
  headerTitle: {
    flexDirection: "column",
    marginTop: "40pt",
  },
  headerTitleName: {
    fontWeight: "semibold",
    fontSize: "24",
    marginBottom: "3pt",
    color: "#3A6D8C",
  },
  headerTitleDescription: {
    fontSize: "11",
    lineHeight: "1.5pt",
  },
  PersonalDetailArea: {
    flexDirection: "column",
  },
  PersonalDetailRow: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 2,
  },
  PersonalDetailRight: {
    fontSize: 11,
    width: "69%",
  },

  Area: {
    flexDirection: "row",
    marginTop: 10,
  },
  AreaTitle: {
    borderBottom: 0.7,
    borderColor: "#758694",
    lineHeight: 1.3,
    marginTop: 15,
    
  },
  AreaContentLeft: {
    width: "31%",
    color: "#3A6D8C",
    fontSize: 11,
    fontWeight: "semibold",
  },
  AreaContentRight: {
    width: "69%",
    flexDirection: "column",
  },
  AreaContentRight1: {
    fontSize: 11,
    fontWeight: "semibold",
    width: "69%",
  },
  AreaContentRight2: {
    fontSize: 11,
    fontWeight: "semibold",
    width: "69%",
  },
  AreaContentRight3: {
    fontSize: 11,
    width: "69%",
  },
  ListContent: {
    fontSize: 11,
    flexDirection: "row",
  },
  ListDecoration: {
    height: 10,
    width: 10,
    backgroundColor: "#3A6D8C",
  },
  ListContentArea: {
    flexDirection: "column",
    marginTop: 6,
  },
  Image: {
    marginTop: 40,
    width: 140,
    height: "auto",
    borderRadius: "100%",
    border: 2,

    borderColor: "#3A6D8C",
    aspectRatio: 1 / 1,
  },
  progressBarBackground: {
    width: "100%",
    height: 4,
    backgroundColor: "#DDDDDD",
    borderRadius: 3,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#3A6D8C",
    borderRadius: 3,
  },
});

interface SkillLevelProps {
  level: number; 
}

const SkillLevel: React.FC<SkillLevelProps> = ({ level }) => {
  return (
     <View style={styles.progressBarBackground}>
      <View style={{ ...styles.progressBarFill, width: `${level}%` }} /> 
    </View>
  );
};




const Template1: React.FC = () => {

  const [personalInfo, setPersonalInfo] = useState({
    image: "",
    name: "",
    surName: "",
    email: "",
    gender: "",
    web: "",
    phone: "",
    bornDate: "",
    city: "",
    link: "",
    adres: "",
    marital: "",
    soldier: "",
  });

  useEffect(() => {
    const storedInfo = localStorage.getItem("PersonelInfo");

    if (storedInfo) {
      try {
        const parsedInfo = JSON.parse(storedInfo);
        setPersonalInfo(parsedInfo);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  //----------------------------------------------------------------------------------->>>>>>  EĞİTİMLER  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const [educationData, setEducationData] = useState<any[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem("AllEducationData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const educationArray = Object.values(parsedData);
      setEducationData(educationArray);
    }
  }, []);


  //----------------------------                -----------------------DENEYİMLER----------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<

    const [experienceData, setExperienceData] = useState<any[]>([]);

    useEffect(() => {
      const savedDataExp = localStorage.getItem("AllExperienceData");
      if (savedDataExp) {
        const parsedData = JSON.parse(savedDataExp);
        const experienceArray = Object.values(parsedData);
        setExperienceData(experienceArray);
      }
    }, []);
  //-----------------------------Referans--------------------------------->>>>>>>
  const [referenceData, setReferenceData] = useState<any[]>([]);

  useEffect(() => {
    const savedDataRef = localStorage.getItem("AllReferenceData");
    if (savedDataRef) {
      const parsedData = JSON.parse(savedDataRef);
      const referenceArray = Object.values(parsedData);
      setReferenceData(referenceArray);
    }
  }, []);

  //--------------------------------Sertifilalar--------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   const [certificateData, setCertificateData] = useState<any[]>([]);

   useEffect(() => {
     const savedDataCer = localStorage.getItem("AllCertificateData");
     if (savedDataCer) {
       const parsedData = JSON.parse(savedDataCer);
       const certificateArray = Object.values(parsedData);
       setCertificateData(certificateArray);
     }
   }, []);

   //------------------------------------Yetenekler---------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const [skillsData, setSkillsData] = useState<any[]>([]);

    useEffect(() => {
      const savedDataskill = localStorage.getItem("AllSkillsData");
      if (savedDataskill) {
        const parsedData = JSON.parse(savedDataskill);
        const skillsArray = Object.values(parsedData);
        setSkillsData(skillsArray);
      }
    }, []);

    //--------------------------------------------------özett-----------------------------------

    const [summary, setSummary] = useState({
      summary: "",
     
    });

    useEffect(() => {
      const storedInfo = localStorage.getItem("Summary");

      if (storedInfo) {
        try {
          const parsedInfo = JSON.parse(storedInfo);
          setSummary(parsedInfo);
        } catch (error) {
          console.error("Error parsing localStorage data:", error);
        }
      }
        }, []);
        //--------------------------------------Diller----------------------------------

        const [languageData, setLanguageData] = useState<any[]>([]);

        useEffect(() => {
          const savedDatalan = localStorage.getItem("AllLanguageData");
          if (savedDatalan) {
            const parsedData = JSON.parse(savedDatalan);
            const languageArray = Object.values(parsedData);
            setLanguageData(languageArray);
          }
        }, []);
        //---------------------------------Hobiler----------------------------
          const [hobbyData, setHobbyData] = useState<any[]>([]);

          useEffect(() => {
            const savedDatahob = localStorage.getItem("AllHobbyData");
            if (savedDatahob) {
              const parsedData = JSON.parse(savedDatahob);
              const hobbyArray = Object.values(parsedData);
              setHobbyData(hobbyArray);
            }
          }, []);

  return (
    <Document title="CV" pageMode="fullScreen" pageLayout="singlePage">
      <Page style={styles.page} size={"A4"}>
        s
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image src={personalInfo.image} style={styles.Image} />
          </View>
          <View style={styles.headerRight}>
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleName}>
                {personalInfo.name} {personalInfo.surName}
              </Text>

              {summary.summary !== "" && (
                <Text style={styles.headerTitleDescription}>
                  {summary.summary}
                </Text>
              )}
            </View>
          </View>
        </View>
        <Text style={styles.AreaTitle}>Kişisel Bilgiler</Text>
        <View style={styles.PersonalDetailArea}>
          {personalInfo.name !== "" && (
            <View style={styles.PersonalDetailRow}>
              <Text style={styles.AreaContentLeft}>İsim</Text>
              <Text style={styles.PersonalDetailRight}>
                {personalInfo.name} {personalInfo.surName}
              </Text>
            </View>
          )}
          {personalInfo.email !== "" && (
            <View style={styles.PersonalDetailRow}>
              <Text style={styles.AreaContentLeft}>E-posta adresi</Text>
              <Text style={styles.PersonalDetailRight}>
                {personalInfo.email}
              </Text>
            </View>
          )}
          {personalInfo.phone !== "" && (
            <View style={styles.PersonalDetailRow}>
              <Text style={styles.AreaContentLeft}>Telefon Numarası</Text>
              <Text style={styles.PersonalDetailRight}>
                {personalInfo.phone}
              </Text>
            </View>
          )}
          {personalInfo.adres !== "" && (
            <View style={styles.PersonalDetailRow}>
              <Text style={styles.AreaContentLeft}>Adres</Text>
              <Text style={styles.PersonalDetailRight}>
                {personalInfo.adres}
              </Text>
            </View>
          )}
          {personalInfo.bornDate !== "" && (
            <View style={styles.PersonalDetailRow}>
              <Text style={styles.AreaContentLeft}>Doğum tarihi</Text>
              <Text style={styles.PersonalDetailRight}>
                {personalInfo.bornDate}
              </Text>
            </View>
          )}
          {personalInfo.gender !== "" && (
            <View style={styles.PersonalDetailRow}>
              <Text style={styles.AreaContentLeft}>Cinsiyet</Text>
              <Text style={styles.PersonalDetailRight}>
                {personalInfo.gender}
              </Text>
            </View>
          )}
          {personalInfo.marital !== "" && (
            <View style={styles.PersonalDetailRow}>
              <Text style={styles.AreaContentLeft}>Medeni durum</Text>
              <Text style={styles.PersonalDetailRight}>
                {personalInfo.marital}
              </Text>
            </View>
          )}
          {personalInfo.soldier !== "" && (
            <View style={styles.PersonalDetailRow}>
              <Text style={styles.AreaContentLeft}>Askerlik</Text>
              <Text style={styles.PersonalDetailRight}>
                {personalInfo.soldier}
              </Text>
            </View>
          )}
          {personalInfo.web !== "" && (
            <View style={styles.PersonalDetailRow}>
              <Text style={styles.AreaContentLeft}>Website</Text>
              <Text style={styles.PersonalDetailRight}>{personalInfo.web}</Text>
            </View>
          )}
          {personalInfo.link !== "" && (
            <View style={styles.PersonalDetailRow}>
              <Text style={styles.AreaContentLeft}>Linkedin</Text>
              <Text style={styles.PersonalDetailRight}>
                {personalInfo.link}
              </Text>
            </View>
          )}
        </View>
        {/*----------------------------------  Eğitimler  ------------------------------------------------*/}
        {educationData.length > 0 && (
          <>
            <Text style={styles.AreaTitle}>Eğitimler</Text>

            {educationData.map((edu, index) => (
              <View style={styles.Area} key={index} wrap={false}>
                <Text style={styles.AreaContentLeft}>
                  {edu.startMonth} {edu.startYear} - {edu.endMonth}{" "}
                  {edu.endYear}
                </Text>
                <View>
                  <Text style={styles.AreaContentRight1}>{edu.degree}</Text>
                  <Text style={styles.AreaContentRight2}>
                    {edu.school}, {edu.city}
                  </Text>
                  <Text style={styles.AreaContentRight3}>
                    {edu.description}
                  </Text>
                </View>
              </View>
            ))}
          </>
        )}
        {/*------------------------------------- İş Deneyimi--------------------------------------------- */}
        {experienceData.length > 0 && (
          <>
            <Text style={styles.AreaTitle}>İş Deneyimi</Text>
            {experienceData.map((exp, index) => (
              <View style={styles.Area} key={index} wrap={false}>
                <Text style={styles.AreaContentLeft}>
                  {exp.startMonth} {exp.startYear} - {exp.endMonth}
                  {exp.endYear}
                </Text>
                <View>
                  <Text style={styles.AreaContentRight1}>{exp.job}</Text>
                  <Text style={styles.AreaContentRight2}>
                    {exp.employer}, {exp.city}
                  </Text>
                  <Text style={styles.AreaContentRight3}>
                    {exp.description}
                  </Text>
                </View>
              </View>
            ))}
          </>
        )}
        {/*------------------------------- Sertifikalar --------------------------------*/}
        {certificateData.length > 0 && (
          <>
            <View wrap={false}>
              <Text style={styles.AreaTitle}>Sertifikalar</Text>
              <View style={styles.Area} wrap={false}>
                <Text style={styles.AreaContentLeft}>
                  {certificateData[0].startMonth} {certificateData[0].startYear}
                  -{certificateData[0].endMonth} {certificateData[0].endYear}
                </Text>
                <View>
                  <Text style={styles.AreaContentRight1}>
                    {certificateData[0].certificate}
                  </Text>
                  <Text style={styles.AreaContentRight2}>
                    {certificateData[0].institution}
                  </Text>
                  <Text style={styles.AreaContentRight3}>
                    {certificateData[0].description}
                  </Text>
                </View>
              </View>
            </View>
            {certificateData.slice(1).map((cer, index) => (
              <View style={styles.Area} key={index} wrap={false}>
                <Text style={styles.AreaContentLeft}>
                  {cer.startMonth} {cer.startYear} - {cer.endMonth}{" "}
                  {cer.endYear}
                </Text>
                <View>
                  <Text style={styles.AreaContentRight1}>
                    {cer.certificate}
                  </Text>
                  <Text style={styles.AreaContentRight2}>
                    {cer.institution}
                  </Text>
                  <Text style={styles.AreaContentRight3}>
                    {cer.description}
                  </Text>
                </View>
              </View>
            ))}
          </>
        )}
        {/* -----------------------Diller--------------------------------------------------------- */}
        {languageData.length > 0 && (
          // <>
          //   <View wrap={false}>
          //     <Text style={styles.AreaTitle}>Diller</Text>
          //     <View style={styles.PersonalDetailRow}>
          //       <Text style={styles.AreaContentLeft}>
          //         {languageData[0].language}
          //       </Text>
          //       <Text style={styles.PersonalDetailRight}>
          //         {languageData[0].languageLevel}
          //       </Text>
          //     </View>
          //   </View>
          //   {languageData.slice(1).map((lan, index) => (
          //     <View style={styles.PersonalDetailRow} key={index} wrap={false}>
          //       <Text style={styles.AreaContentLeft}>{lan.language}</Text>
          //       <Text style={styles.PersonalDetailRight}>
          //         {lan.languageLevel}
          //       </Text>
          //     </View>
          //   ))}
          // </>
          <>
            <Text
              style={{
                borderBottom: 0.7,
                borderColor: "#758694",
                lineHeight: 1.3,
                marginTop: 15,
                marginBottom:15,
              }}
            >
              Diller
            </Text>
            {languageData.map((lan, index) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "50%",
                }}
                key={index}
              >
                <Text style={styles.AreaContentLeft}>{lan.language}:</Text>
                <SkillLevel level={lan.languageLevel} />
              </View>
            ))}
          </>
        )}
        {/*------------------------------ Yetenekler -----------------------------------------*/}
        {skillsData.length > 0 && (
          <>
            
            <Text
              style={{
                borderBottom: 0.7,
                borderColor: "#758694",
                lineHeight: 1.3,
                marginTop: 15,
                marginBottom:15,
              }}
            >
              Yetenekler
            </Text>
            {skillsData.map((skill, index) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "50%",
                }}
                key={index}
              >
                <Text style={styles.AreaContentLeft}>{skill.skills}:</Text>
                <SkillLevel level={skill.skillsLevel} />
              </View>
            ))}
          </>
        )}
        {/*---------------------------------------- refernaslar -----------------------------------------------*/}
        {referenceData.length > 0 && (
          <>
            <View wrap={false}>
              <Text style={styles.AreaTitle}>Referanslar</Text>

              <View style={{ marginTop: 8 }}>
                <Text style={styles.AreaContentRight1}>
                  {referenceData[0].name}
                </Text>
                <Text style={styles.AreaContentRight2}>
                  {referenceData[0].company}
                </Text>
                <Text style={styles.AreaContentRight3}>
                  {referenceData[0].tel} {referenceData[0].mail}
                </Text>
              </View>
            </View>
            {referenceData.slice(1).map((ref, index) => (
              <View style={{ marginTop: 8 }} key={index} wrap={false}>
                <Text style={styles.AreaContentRight1}>{ref.name}</Text>
                <Text style={styles.AreaContentRight2}>{ref.company}</Text>
                <Text style={styles.AreaContentRight3}>
                  {ref.tel} {ref.mail}
                </Text>
              </View>
            ))}
          </>
        )}
        {/*--------------------------- Hobi ve ilgi alanları ------------------------------------*/}
        {hobbyData.length > 0 && (
          <>
            <View wrap={false}>
              <Text style={styles.AreaTitle}>İlgi Alanları</Text>
              <View style={styles.PersonalDetailRow}>
                <Text style={styles.PersonalDetailRight}>
                  {hobbyData[0].hobby}
                </Text>
              </View>
            </View>
            {hobbyData.slice(1).map((hob, index) => (
              <View style={styles.PersonalDetailRow} key={index} wrap={false}>
                <Text style={styles.PersonalDetailRight}>{hob.hobby}</Text>
              </View>
            ))}
          </>
        )}
      </Page>
    </Document>
  );
};

export default Template1;

