import React from "react";

type IconTypes = "cart" | "heart" | "remove" | "login" | "logout" | "user";

interface IProps {
          type: IconTypes;
          className?: string;
          width?: number;
          height?: number;
          color?: string;
}

const SvgIcon = ({ type, className = "", width, height, color }: IProps) => {
          let icon = <path />;
          switch (type) {
                    case "cart":
                              icon = (
                                        <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                              );
                              break;
                    case "heart":
                              icon = (
                                        <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        ></path>
                              );
                              break;
                    case "remove":
                              icon = (
                                        <svg
                                                  className="w-6 h-6"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                                  xmlns="http://www.w3.org/2000/svg"
                                        >
                                                  <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                                  ></path>
                                        </svg>
                              );
                              break
                    case "login":
                              icon = (
                                        <svg
                                                  className="w-6 h-6"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                                  xmlns="http://www.w3.org/2000/svg"
                                        >
                                                  <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4 "
                                                  ></path>
                                                  <polyline xmlns="http://www.w3.org/2000/svg" points="10 17 15 12 10 7" />
                                                  <line xmlns="http://www.w3.org/2000/svg" x1="15" y1="12" x2="3" y2="12" />
                                        </svg>
                              );
                              break
                    case "logout":
                              icon = (
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                  <path strokeWidth="2" d="M13,9 L13,2 L1,2 L1,22 L13,22 L13,15 M22,12 L5,12 M17,7 L22,12 L17,17" />
                                        </svg>
                              );
                              break
                    case "user":
                              icon = (
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                  <path fill="none" strokeWidth="2" d="M8,24 L8,19 M16,24 L16,19 M3,24 L3,19 C3,14.0294373 7.02943725,11 12,11 C16.9705627,11 21,14.0294373 21,19 L21,24 M12,11 C14.7614237,11 17,8.76142375 17,6 C17,3.23857625 14.7614237,1 12,1 C9.23857625,1 7,3.23857625 7,6 C7,8.76142375 9.23857625,11 12,11 Z" />
                                        </svg>
                              );
                              break;
                    default: {
                              icon = <path />;
                    }
          }

          return (
                    <svg
                              className={className}
                              height={height}
                              width={width}
                              style={{ color, height, width }}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                    >
                              {icon}
                    </svg>
          );
};

export default SvgIcon;
