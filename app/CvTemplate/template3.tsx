
import React , {useEffect, useState}from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,

} from "@react-pdf/renderer";


Font.register({
  family: "FontName",

  fonts: [
    { src: "AfacadFlux-Regular.ttf" },
    { src: "AfacadFlux-Light.ttf", fontWeight: "light" },
    { src: "AfacadFlux-Medium.ttf", fontWeight: "medium" },
    { src: "AfacadFlux-SemiBold.ttf", fontWeight: "semibold" },
  ],
});

const ColorTheme = "#1E201E";

const styles = StyleSheet.create({
  page: {
    fontFamily: "FontName",
    flexDirection: "row",
  },
  ContainerLeft: {
    paddingVertical: 15,
    height: "100%",
    width: "36%",
    backgroundColor: "#000000",
    flexDirection: "column",
  },
  ContainerRight: {
    height: "200%",
    width: "64%",
    flexDirection: "column",
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  Image: {
    width: 140,
    height: "auto",
    borderRadius: "100%",
    alignSelf: "center",
    marginBottom: 5,
    aspectRatio: 1 / 1,
    overflow: "hidden",
  },
  LeftTitle: {
    lineHeight: 1.3,
    color: "#F8FAFC",
    fontWeight: "semibold",
    fontSize: 17,
    marginBottom: 3,
    paddingHorizontal: 20,
    marginTop: 12,
  },
  ContactItem: {
    fontSize: 10,
    flexDirection: "column",
    paddingHorizontal: 20,
    marginBottom: 7,
  },
  ContactItemTitle: {
    fontWeight: "semibold",
    marginBottom: 1,
    fontSize: 12,
    color: "#F8FAFC",
  },
  ContactItemContent: {
    marginTop: 0,
    fontSize: 11,
    color: "#F8FAFC",
  },
  ItemContent: {
    marginTop: 2,
    color: "#F8FAFC",
    fontSize: 11,
    paddingHorizontal: 20,
    marginBottom: 3,
  },
  progressBarBackground: {
    width: "100%",
    height: 4,
    backgroundColor: "#606470",
    borderRadius: 3,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#F8FAFC",
    borderRadius: 3,
  },
  text: {
    fontSize: 10,
  },
  Name: {
    fontWeight: "semibold",
    fontSize: 23,
    textAlign: "center",
    color: "#F8FAFC",
  },
  Degree: {
    fontSize: 13,
    fontWeight: "light",
    textAlign: "center",
    color: "#F8FAFC",
  },
  Summary: {
    fontSize: 12,
  },
  Title: {
    fontSize: 18,
    fontWeight: "semibold",
    marginBottom: 4,
    marginTop: 13,
    color: ColorTheme,
  },
  Area: {
    flexDirection: "column",
    marginBottom: 9,
  },
  AreaTitle: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 1,
    color: ColorTheme,
  },
  AreaTitleName: {
    fontSize: 13,
    fontWeight: "semibold",
  },
  AreaTitleDate: {
    fontSize: 11,
    fontWeight: "light",
  },
  AreaTitle2: {
    fontSize: 12,
    fontWeight: "light",
  },
  AreaDescription: {
    fontSize: 12,
    fontWeight: "light",
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





const Template3: React.FC = () => {
  
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
    job:"",
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
    <Document
      title="CV"
      pageMode="fullScreen"
      pageLayout="singlePage"
    >
      <Page style={styles.page} size={"A4"} wrap>
        <View style={styles.ContainerLeft}>
           {personalInfo.image !== "" && (
          <Image src={personalInfo.image} style={styles.Image} />
           )}
          {personalInfo.name !== "" && (
            <Text style={styles.Name}>
              {personalInfo.name} {personalInfo.surName}
            </Text>
          )}
          {personalInfo.name !== "" && (
            <Text style={styles.Degree}>{personalInfo.job}</Text>
          )}

          <Text style={styles.LeftTitle}>İletişim</Text>
          {personalInfo.phone !== "" && (
            <View style={styles.ContactItem}>
              <Text style={styles.ContactItemTitle}>Telefon</Text>
              <Text style={styles.ContactItemContent}>
                {personalInfo.phone}
              </Text>
            </View>
          )}
          {personalInfo.email !== "" && (
            <View style={styles.ContactItem}>
              <Text style={styles.ContactItemTitle}>E-posta</Text>
              <Text style={styles.ContactItemContent}>
                {personalInfo.email}
              </Text>
            </View>
          )}
          {personalInfo.adres !== "" && (
            <View style={styles.ContactItem}>
              <Text style={styles.ContactItemTitle}>Adres</Text>
              <Text style={styles.ContactItemContent}>
                {personalInfo.adres}
              </Text>
            </View>
          )}
          {personalInfo.web !== "" && (
            <View style={styles.ContactItem}>
              <Text style={styles.ContactItemTitle}>Website</Text>
              <Text style={styles.ContactItemContent}>{personalInfo.web}</Text>
            </View>
          )}
          {personalInfo.link !== "" && (
            <View style={styles.ContactItem}>
              <Text style={styles.ContactItemTitle}>Linkedin</Text>
              <Text style={styles.ContactItemContent}>{personalInfo.link}</Text>
            </View>
          )}
          {skillsData.length > 0 && (
            <>
              <Text style={styles.LeftTitle}>Yetenekler</Text>
              {skillsData.map((skill, index) => (
                <View style={styles.ContactItem} key={index} wrap={false}>
                  <Text style={styles.ContactItemTitle}>{skill.skills}</Text>
                  <SkillLevel level={skill.skillsLevel} />
                </View>
              ))}
            </>
          )}
          {languageData.length > 0 && (
          <>
          <Text style={styles.LeftTitle}>Diller</Text>
              {languageData.map((lan, index) => (
          <View style={styles.ContactItem} key={index}>
            <Text style={styles.ContactItemTitle}>{lan.language}</Text>
            <SkillLevel level={lan.languageLevel} />
          </View>
          ))}
          </>
          )}

          {hobbyData.length > 0 && (
          <>
          <Text style={styles.LeftTitle}>İlgi Alanları</Text>
          {hobbyData.map((hob, index) => (
          <Text key={index} style={styles.ItemContent}>{"\u2022"} {hob.hobby}</Text>
          ))}
          </>
          )}
         
        </View>
        <View style={styles.ContainerRight}>
           {summary.summary !== "" && (
              <>
            <Text style={styles.Title}>Profil</Text>
            <Text style={styles.Summary}>
              {summary.summary}
            </Text>
            </>
           )}
          {educationData.length > 0 && (
            <>
              <Text style={styles.Title}>Eğitim</Text>
              {educationData.map((edu, index) => (
                <View style={styles.Area} key={index} wrap={false}>
                  <View style={styles.AreaTitle}>
                    <Text style={styles.AreaTitleName}>{edu.degree}</Text>
                    <Text style={styles.AreaTitleDate}>
                      {edu.startMonth} {edu.startYear} - {edu.endMonth}{" "}
                      {edu.endYear}
                    </Text>
                  </View>
                  <Text style={styles.AreaTitle2}>{edu.school}</Text>
                  <Text style={styles.AreaDescription}>{edu.description}</Text>
                </View>
              ))}
            </>
          )}
          {experienceData.length > 0 && (
            <>
              <View wrap={false}>
                <Text style={styles.Title}>İş Deneyimi</Text>
                <View style={styles.Area}>
                  <View style={styles.AreaTitle}>
                    <Text style={styles.AreaTitleName}>
                      {experienceData[0].job}
                    </Text>
                    <Text style={styles.AreaTitleDate}>
                      {experienceData[0].startMonth}{" "}
                      {experienceData[0].startYear} -{" "}
                      {experienceData[0].endMonth} {experienceData[0].endYear}
                    </Text>
                  </View>
                  <Text style={styles.AreaTitle2}>
                    {experienceData[0].employer}
                  </Text>
                  <Text style={styles.AreaDescription}>
                    {experienceData[0].description}
                  </Text>
                </View>
              </View>
              {experienceData.slice(1).map((exp, index) => (
                <View style={styles.Area} wrap={false} key={index}>
                  <View style={styles.AreaTitle}>
                    <Text style={styles.AreaTitleName}>{exp.job}</Text>
                    <Text style={styles.AreaTitleDate}>
                      {exp.startMonth} {exp.startYear} - {exp.endMonth}{" "}
                      {exp.endYear}
                    </Text>
                  </View>
                  <Text style={styles.AreaTitle2}>{exp.employer}</Text>
                  <Text style={styles.AreaDescription}>{exp.description}</Text>
                </View>
              ))}
            </>
          )}
          {certificateData.length > 0 && (
            <>
              <View wrap={false}>
                <Text style={styles.Title}>Sertifikalar</Text>
                <View style={styles.Area}>
                  <View style={styles.AreaTitle}>
                    <Text style={styles.AreaTitleName}>
                      {certificateData[0].certificate}
                    </Text>
                    <Text style={styles.AreaTitleDate}>
                      {certificateData[0].startMonth}{" "}
                      {certificateData[0].startYear} -{" "}
                      {certificateData[0].endMonth} {certificateData[0].endYear}
                    </Text>
                  </View>
                  <Text style={styles.AreaTitle2}>
                    {certificateData[0].institution}
                  </Text>
                  <Text style={styles.AreaDescription}>
                    {certificateData[0].description}
                  </Text>
                </View>
              </View>
              {certificateData.slice(1).map((cer, index) => (
                <View style={styles.Area} wrap={false} key={index}>
                  <View style={styles.AreaTitle}>
                    <Text style={styles.AreaTitleName}>{cer.certificate}</Text>
                    <Text style={styles.AreaTitleDate}>
                      {cer.startMonth} {cer.startYear} - {cer.endMonth}{" "}
                      {cer.endYear}
                    </Text>
                  </View>
                  <Text style={styles.AreaTitle2}>{cer.institution}</Text>
                  <Text style={styles.AreaDescription}>{cer.description}</Text>
                </View>
              ))}
            </>
          )}
          {referenceData.length > 0 && (
            <>
              <View wrap={false}>
                <Text style={styles.Title}>Referanslar</Text>
                <View
                  wrap={false}
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View style={{ marginRight: 10 }}>
                    <Text style={styles.AreaTitleName}>
                      {referenceData[0].name}
                    </Text>
                    <Text style={styles.AreaTitleDate}>
                      {referenceData[0].company} 
                    </Text>
                  </View>
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontWeight: "semibold", fontSize: 11 }}>
                        Telefon:
                      </Text>
                      <Text style={{ fontSize: 11 }}>
                        {" "}
                        {referenceData[0].tel}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontWeight: "semibold", fontSize: 11 }}>
                        Email:
                      </Text>
                      <Text style={{ fontSize: 11 }}>
                        {referenceData[0].mail}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {referenceData.slice(1).map((ref, index) => (
                <View
                  key={index}
                  wrap={false}
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View style={{ marginRight: 10 }}>
                    <Text style={styles.AreaTitleName}>{ref.name}</Text>
                    <Text style={styles.AreaTitleDate}>
                      {ref.company} / Yazılım Direktörü
                    </Text>
                  </View>
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontWeight: "semibold", fontSize: 11 }}>
                        Telefon:
                      </Text>
                      <Text style={{ fontSize: 11 }}>{ref.tel}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontWeight: "semibold", fontSize: 11 }}>
                        Email:
                      </Text>
                      <Text style={{ fontSize: 11 }}>{ref.mail}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default Template3;  