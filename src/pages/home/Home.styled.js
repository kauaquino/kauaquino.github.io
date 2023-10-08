import { styled, keyframes } from "@mui/material/styles";
import { fontWeight } from "@mui/system";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";

export const BackgroundDiv = styled("div")(({ theme }) => ({
  zIndex: 1,
  margin: "auto",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

export const Content = styled("div")(({ theme }) => ({
  margin: "auto",
  width: "90%",
  height: "100%",
}));

export const Top = styled(motion.div)(({ theme }) => ({
  position: "fixed",
  color: "white",
  display: "flex",
  alignSelf: "center",
  height: "100%",
  alignItems: "start",
  fontSize: "3rem",
  paddingTop: "2rem",
  cursor: "pointer",
  zIndex: 3,

  svg: {
    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
    cursor: "pointer",
  },
}));

export const Down = styled(motion.div)(({ theme }) => ({
  position: "fixed",
  color: "white",
  display: "flex",
  alignSelf: "center",
  height: "100%",
  alignItems: "self-end",
  fontSize: "3rem",
  paddingBottom: "2rem",
  cursor: "pointer",
  zIndex: 3,

  svg: {
    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
    cursor: "pointer",
  },
}));

export const Left = styled(motion.div)(({ theme }) => ({
  position: "fixed",
  color: "white",
  display: "flex",
  alignSelf: "start",
  alignItems: "center",
  height: "100%",
  fontSize: "3rem",
  paddingBottom: "2rem",
  cursor: "pointer",
  zIndex: 3,

  svg: {
    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
    cursor: "pointer",
  },
}));

export const Rigth = styled(motion.div)(({ theme }) => ({
  position: "fixed",
  color: "white",
  display: "flex",
  alignSelf: "end",
  height: "100%",
  alignItems: "center",
  fontSize: "3rem",
  paddingBottom: "2rem",
  zIndex: 3,

  svg: {
    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
    cursor: "pointer",
  },
}));

export const FontContent = styled("div")(({ theme }) => ({
  color: "white",
  position: "fixed",
  width: "100%",
  display: "flex",
  justifyContent: "end",
  paddingTop: "1rem",

  a: {
    paddingRight: "1rem",
  },
  "a svg": {
    fontSize: "1.5rem",
    fill: "#8b57ff",
  },
}));

export const Icons = styled(motion.a)(({ theme }) => ({
  cursor: "pointer",
}));

export const LogoBandeira = styled("img")(({ theme }) => ({
  cursor: "pointer",
}));

export const Menu = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: "10rem",
  paddingRight: "10rem",
  alignItems: "center",
  borderBottom: "1px solid #225CCF",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
}));

export const MenuItem = styled("li")(({ theme, isActive }) => ({
  fontSize: "2.25rem",
  fontWeight: "700",
  cursor: "pointer",

  ...(isActive == true && {
    color: "#0EE6B7",
  }),

  ...(isActive == false && {
    transition: "2s",
    color: "#9D9D9D",
    ":hover": {
      color: "white",
      transition: "2s",
    },
  }),
}));

export const Header = styled(motion.div)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 1417px)": {
    flexDirection: "column",
  },
}));

export const TitleSubti = styled("p")(({ theme }) => ({
  fontSize: "1.5rem",

  "@media (max-width: 1609px)": {
    fontSize: "1rem",
  },

  "@media (max-width: 1417px)": {
    fontSize: "0.8rem",
  },
}));

export const TitlePrincipal = styled("p")(({ theme }) => ({
  fontSize: "2.75rem",

  "@media (max-width: 1609px)": {
    fontSize: "2rem",
  },

  "@media (max-width: 1417px)": {
    fontSize: "1.3rem",
  },

  "@media (max-width: 800px)": {
    fontSize: "1rem",
  },
}));

export const Kaua = styled(motion.img)(({ theme }) => ({
  marginRight: "8rem",
  borderRadius: '1rem',
  width: '15rem',

  "@media (max-width: 1417px)": {
    marginRight: "0rem",
    marginBottom: "4rem",
  },

  "@media (max-width: 800px)": {
    marginRight: "0rem",
    marginBottom: "4rem",
    width: "80%",
  },
}));

export const Apresentation = styled("div")(({ theme }) => ({
  zIndex: "1",
  marginLeft: "4rem",
  background: "linear-gradient(180deg, #4F22CF 0%, #291C47 100%)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "25px",
  width: "700px",
  textAlign: "center",
  color: "white",
  fontWeight: "700",
  padding: "4rem",

  "@media (max-width: 1417px)": {
    marginLeft: "0rem",
    width: "400px",
    padding: "2rem",
  },

  "@media (max-width: 800px)": {
    marginLeft: "0rem",
    width: "300px",
    padding: "2rem",
  },
}));

export const Technologies = styled("div")(({ theme }) => ({
  width: "90%",
  margin: "auto",

  "@media (max-width: 800px)": {
    width: "100%",
    textAlign: "center",
  },
}));

export const TechnologiesImg = styled("img")(({ theme }) => ({
  width: "100%",
}));

export const TechDiv = styled("div")(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  marginBottom: '2rem',

  "& span":{
    backgroundColor: '#041435',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '1rem'
  }
}));

export const BtnsDiv = styled("div")(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  marginBottom: '0.5rem',

  "& a":{
    backgroundColor: '#041435',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '1rem',
    fontWeight: '600',
    width: '45%',
  }
}));

export const Slider = styled(SwiperSlide)(({ theme }) => ({
  display: 'flex', flexDirection: 'column',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
}));

export const imgContainer = styled('div')(({ theme }) => ({
  width: '100%',

  "& img": {
    borderRadius: '1rem 1rem 0rem 0rem'
  }
}));

export const ContentSlider = styled("div")(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1rem',
  background: 'linear-gradient(180deg, #4F22CF 0%, #291C47 100%)',
  width: '100%',
  display: 'flex',
  minHeight: '15rem',
  maxHeight: '15rem',
  justifyContent: 'space-around',

  flexDirection: 'column',
  borderRadius: '0rem 0rem 1rem 1rem',
}));

export const DivImg = styled("div")(({ theme }) => ({
  width: "80%",
  textAlign: "center",
  zIndex: 1,
}));

export const Title = styled("p")(({ theme }) => ({
  marginTop: "4rem",
  fontSize: "4rem",
  fontWeight: "700",
  color: "#0EE6B7",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

  "@media (max-width: 800px)": {
    fontSize: "3rem",
  },
}));

export const Subtitle = styled("p")(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "700",
  color: "#929594",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  marginBottom: "2rem",
}));

export const AboutUs = styled("div")(({ theme }) => ({
  margin: "auto",
  width: "90%",
  textAlign: "end",
  zIndex: 1,

  "@media (max-width: 800px)": {
    width: "100%",
    textAlign: "center",
  },
}));

export const AboutUsItens = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignSelf: "center",
  justifyContent: "center",

  "@media (max-width: 1200px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const AboutUsItem = styled("div")(({ theme }) => ({
  background: "linear-gradient(180deg, #4F22CF 0%, #291C47 100%)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "25px",
  fontSize: "1.5rem",
  color: "#0EE6B7",
  textAlign: "start",
  padding: "2rem",
  marginLeft: "1rem",
  lineHeight: "3rem",
  fontWeight: "700",
  width: "50%",
  display: "flex",
  minHeight: "350px",

  "@media (max-width: 1200px)": {
    fontSize: "1.5rem",

    "&:nth-child(1)": {
      marginBottom: "2rem",
    },
  },
  "@media (max-width: 800px)": {
    width: "80%",
  },
}));

export const ListAbout = styled("div")(({ theme }) => ({}));

export const ListAboutItem = styled("li")(({ theme }) => ({
  alignSelf: "center",
  span: {
    fontSize: "1rem",
  },
}));

export const TextPhrase = styled("div")(({ theme }) => ({
  marginTop: "5rem",
  textAlign: "center",
  fontSize: "2.5rem",
  fontWeight: "700",
  color: "#0EE6B7",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}));

export const Projects = styled("div")(({ theme }) => ({
  textAlign: "start",

  "@media (max-width: 800px)": {
    textAlign: "center",
  },
}));

export const ProjectItems = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  color: "white",
  fontWeight: "700",

  "@media (max-width: 1270px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ProjectItem = styled("div")(({ theme }) => ({
  background: "linear-gradient(180deg, #4F22CF 0%, #291C47 100%)",
  borderRadius: "2rem",
  height: "50%",
  padding: "1.5rem",

  "@media (max-width: 1270px)": {
    height: "25%",
    with: "50%",

    "&:nth-child(1)": {
      marginBottom: "1rem",
    },
  },
}));

export const ProjectImg = styled("img")(({ theme }) => ({
  borderRadius: "2rem",
  width: "100%",
  height: "50%",
  zIndex: 1,

  "@media (max-width: 1270px)": {
    height: "25%",
    width: "100%",
  },
}));

export const DivTagsProject = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",

  span: {
    color: "white",
    backgroundColor: "#041435",
    borderRadius: "2rem",
    height: "2rem",
    display: "flex",
    width: "5rem",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const DivBtnsProject = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  a: {
    color: "white",
    backgroundColor: "#041435",
    borderRadius: "2rem",
    height: "2rem",
    display: "flex",
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const DivContentProject = styled("div")(({ theme }) => ({
  textAlign: "center",
}));

export const ContactMe = styled("div")(({ theme }) => ({
  textAlign: "center",
}));

export const ContactItems = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",

  "@media (max-width: 850px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ContactItem = styled("div")(({ theme }) => ({
  transition: "2s",
  fontSize: "2.25rem",
  fontWeight: "700",
  color: "white",
  background: "linear-gradient(180deg, #4F22CF 0%, #291C47 100%)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "25px",
  padding: "2rem",
  width: "10%",
  cursor: "pointer",
  marginBottom: "10rem",
  ":hover": {
    color: "#0EE6B7",
    transition: "2s",
  },

  "@media (max-width: 1200px)": {
    fontSize: "1.5rem",
  },

  "@media (max-width: 850px)": {
    marginBottom: "2rem",
    width: "50%",
  },
}));
