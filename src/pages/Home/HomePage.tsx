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
          <ul>
            <li>Zoho Mail</li>
            <li>Proton Mail</li>
            <li>Fast Mail</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGooglechrome}
          title="Alternatives for Google Chrome"
        >
          <ul>
            <li>Brave</li>
            <li>Firefox</li>
            <li>Vivaldi</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGooglemaps}
          title="Alternatives for Google Maps"
        >
          <ul>
            <li>Mapbox</li>
            <li>Leaflet</li>
            <li>Open Street Map</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGoogle}
          title="Alternatives for Google Search"
        >
          <ul>
            <li>Duck duck go</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={TiImage}
          title="Alternatives for Google Images"
        >
          <ul>
            <li>Unsplash</li>
            <li>Pexels</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={TiWeatherPartlySunny}
          title="Alternatives for Google Weather"
        >
          <ul>
            <li>Dark Sky</li>
            <li>1 Weather</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={RiLockPasswordFill}
          title="Alternatives for Google Password Manager"
        >
          <ul>
            <li>BitWarden</li>
            <li>KeePass</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection icon={SiYoutube} title="Alternatives for Youtube">
          <ul>
            <li>Vimeo</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGoogledrive}
          title="Alternatives for Google Drive"
        >
          <ul>
            <li>Nextcloud</li>
            <li>Zoho Workspace</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={GiArrowFlights}
          title="Alternatives for Google Flights"
        >
          <ul>
            <li>Skyscanner</li>
            <li>Kiwi</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGooglesheets}
          title="Alternatives for Google Sheets"
        >
          <ul>
            <li>Airtable</li>
            <li>Zoho </li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiReadthedocs}
          title="Alternatives for Google Docs"
        >
          <ul>
            <li>Notion</li>
            <li>Bear</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={RiFileLockFill}
          title="Alternatives for Google Authenticator"
        >
          <ul>
            <li>1Password</li>
            <li>Lastpass</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGooglehangouts}
          title="Alternatives for Google Hangouts"
        >
          <ul>
            <li>Telegram</li>
            <li>Whereby</li>
          </ul>
        </CollapsibleSection>
        <CollapsibleSection
          icon={SiGoogleanalytics}
          title="Alternatives for Google Analytics"
        >
          <ul>
            <li>Simple Analytics</li>
          </ul>
        </CollapsibleSection>
      </div>
    </Layout>
  );
};
