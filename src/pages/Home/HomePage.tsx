import s from "./HomePage.module.scss";
import { Layout } from "../../components/layout/Layout";
import { CollapsibleSection } from "../../components/CollapsibleSection/CollapsibleSection";
import {
  SiGmail,
  SiGooglechrome,
  SiGooglemaps,
  SiGoogle,
  SiYoutube,
  SiGoogledrive,
  SiGooglesheets,
  SiReadthedocs,
  SiGooglehangouts,
  SiGoogletranslate,
  SiGoogleanalytics,
} from "react-icons/si";
import { TiWeatherPartlySunny, TiImage } from "react-icons/ti";
import { RiFileLockFill, RiLockPasswordFill } from "react-icons/ri";
import { GiArrowFlights } from "react-icons/gi";

interface Props {}

export const HomePage = (props: Props) => {
  return (
    <Layout>
      <h1 className={s.pageTitle}>🤓</h1>
      <h2 className={s.pageTitle}>Are you sick and tired of being tracked? </h2>
      <h3 className={s.subtitle}>
        Google products are awesome, but the privacy concerns are plain to see.
        Try some of these excellent privacy friendly alternatives to search,
        chrome, email, docs and more.
      </h3>

      <div className={s.altSection}>
        <CollapsibleSection icon={SiGmail} title="Alternatives for Gmail">
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGooglechrome}
          title="Alternatives for Google Chrome"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGooglemaps}
          title="Alternatives for Google Maps"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGoogle}
          title="Alternatives for Google Search"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={TiImage}
          title="Alternatives for Google Images"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={TiWeatherPartlySunny}
          title="Alternatives for Google Weather"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={RiLockPasswordFill}
          title="Alternatives for Google Password Manager"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection icon={SiYoutube} title="Alternatives for Youtube">
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGoogledrive}
          title="Alternatives for Google Drive"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={GiArrowFlights}
          title="Alternatives for Google Flights"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGooglesheets}
          title="Alternatives for Google Sheets"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiReadthedocs}
          title="Alternatives for Google Docs"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={RiFileLockFill}
          title="Alternatives for Google Authenticator"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGooglehangouts}
          title="Alternatives for Google Hangouts"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGoogleanalytics}
          title="Alternatives for Google Analytics"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGoogletranslate}
          title="Alternatives for Google Translate"
        >
          <h1>Coming soon</h1>
        </CollapsibleSection>
      </div>
    </Layout>
  );
};
