import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaMedium,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";
import { useTranslation } from "react-i18next";

export const Socialicons = (params) => {
  const { t } = useTranslation();
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.medium && (
          <li>
            <a href={socialprofils.twitter}>
              <FaMedium />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}

        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>{t("Follow Me")}</p>
    </div>
  );
};
