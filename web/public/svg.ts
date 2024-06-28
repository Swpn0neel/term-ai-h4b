const svgPaths = {
  first: `
        <svg
                viewBox="0 0 83 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.3125 20.825L19.4125 44.8V95.4292L1.88333 77.9375V22.2667L3.3125 20.825ZM3.59583 17.8625L0 21.4917V78.7167L21.3 99.9708V44.2208L3.59583 17.8625ZM82.2958 21.6958L60.7042 0V55.5458L78.7667 82.7083L82.4417 78.7208L82.2958 21.6958ZM21.2833 0.00416667L76.6583 84.5042L61.1625 100L5.75833 15.6875L21.2833 0.00416667Z"
                  fill="#D9D9D9"
                  fill-opacity="0.8"
                />
        </svg>
    `,
  second: `
        <svg
            
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.0025 10.0167C48.6769 10.0167 47.4056 10.5433 46.4682 11.4807C45.5309 12.418 45.0043 13.6893 45.0043 15.0149C45.0043 23.4719 34.7779 27.7104 28.795 21.7276C28.334 21.2502 27.7824 20.8694 27.1726 20.6074C26.5628 20.3455 25.907 20.2076 25.2433 20.2018C24.5796 20.1961 23.9215 20.3225 23.3072 20.5739C22.693 20.8252 22.1349 21.1963 21.6656 21.6656C21.1963 22.1349 20.8252 22.693 20.5739 23.3072C20.3225 23.9215 20.1961 24.5796 20.2018 25.2433C20.2076 25.907 20.3455 26.5628 20.6074 27.1726C20.8694 27.7824 21.2502 28.334 21.7276 28.795C27.7104 34.7779 23.4769 45.0043 15.0149 45.0043C13.6893 45.0043 12.418 45.5309 11.4807 46.4682C10.5433 47.4056 10.0167 48.6769 10.0167 50.0025C10.0167 51.3281 10.5433 52.5994 11.4807 53.5368C12.418 54.4741 13.6893 55.0007 15.0149 55.0007C23.4719 55.0007 27.7104 65.2271 21.7276 71.21C20.8171 72.1526 20.3133 73.4152 20.3247 74.7257C20.3361 76.0362 20.8617 77.2898 21.7884 78.2166C22.7152 79.1433 23.9688 79.6689 25.2793 79.6803C26.5898 79.6917 27.8524 79.1879 28.795 78.2774C34.7779 72.2946 45.0043 76.5281 45.0043 84.9901C45.0043 86.3157 45.5309 87.587 46.4682 88.5243C47.4056 89.4617 48.6769 89.9883 50.0025 89.9883C51.3281 89.9883 52.5994 89.4617 53.5368 88.5243C54.4741 87.587 55.0007 86.3157 55.0007 84.9901C55.0007 76.5331 65.2271 72.2946 71.21 78.2774C71.671 78.7548 72.2226 79.1356 72.8324 79.3975C73.4422 79.6595 74.098 79.7974 74.7617 79.8031C75.4253 79.8089 76.0835 79.6824 76.6978 79.4311C77.312 79.1798 77.8701 78.8087 78.3394 78.3394C78.8087 77.8701 79.1798 77.312 79.4311 76.6978C79.6824 76.0835 79.8089 75.4253 79.8031 74.7617C79.7974 74.098 79.6595 73.4422 79.3975 72.8324C79.1356 72.2226 78.7548 71.671 78.2774 71.21C72.2946 65.2271 76.5281 55.0007 84.9901 55.0007C86.3157 55.0007 87.587 54.4741 88.5243 53.5368C89.4617 52.5994 89.9883 51.3281 89.9883 50.0025C89.9883 48.6769 89.4617 47.4056 88.5243 46.4682C87.587 45.5309 86.3157 45.0043 84.9901 45.0043C76.5331 45.0043 72.2946 34.7779 78.2774 28.795C79.1879 27.8524 79.6917 26.5898 79.6803 25.2793C79.6689 23.9688 79.1433 22.7152 78.2166 21.7884C77.2898 20.8617 76.0362 20.3361 74.7257 20.3247C73.4152 20.3133 72.1526 20.8171 71.21 21.7276C65.2271 27.7104 55.0007 23.4769 55.0007 15.0149C55.0007 13.6893 54.4741 12.418 53.5368 11.4807C52.5994 10.5433 51.3281 10.0167 50.0025 10.0167ZM35.0478 13.9003C35.3242 10.123 37.0198 6.59026 39.7939 4.01175C42.568 1.43323 46.2151 0 50.0025 0C53.7899 0 57.437 1.43323 60.2111 4.01175C62.9852 6.59026 64.6808 10.123 64.9572 13.9003C67.8252 11.4371 71.5178 10.1482 75.2957 10.2917C79.0736 10.4351 82.6579 12.0003 85.3309 14.674C88.0038 17.3476 89.5682 20.9322 89.7108 24.7101C89.8533 28.488 88.5635 32.1804 86.0997 35.0478C89.877 35.3236 93.4101 37.0186 95.989 39.7922C98.568 42.5659 100.002 46.2128 100.002 50.0002C100.003 53.7876 98.5705 57.4349 95.9925 60.2094C93.4144 62.984 89.8819 64.6801 86.1047 64.9572C88.5679 67.8252 89.8568 71.5178 89.7133 75.2957C89.5699 79.0736 88.0046 82.6579 85.331 85.3309C82.6574 88.0038 79.0728 89.5682 75.2949 89.7108C71.517 89.8533 67.8246 88.5635 64.9572 86.0997C64.6808 89.877 62.9852 93.4097 60.2111 95.9883C57.437 98.5668 53.7899 100 50.0025 100C46.2151 100 42.568 98.5668 39.7939 95.9883C37.0198 93.4097 35.3242 89.877 35.0478 86.0997C32.1804 88.5635 28.488 89.8533 24.7101 89.7108C20.9322 89.5682 17.3476 88.0038 14.674 85.3309C12.0003 82.6579 10.4351 79.0736 10.2917 75.2957C10.1482 71.5178 11.4371 67.8252 13.9003 64.9572C10.123 64.6808 6.59026 62.9852 4.01175 60.2111C1.43323 57.437 0 53.7899 0 50.0025C0 46.2151 1.43323 42.568 4.01175 39.7939C6.59026 37.0198 10.123 35.3242 13.9003 35.0478C11.4296 32.1809 10.1344 28.4857 10.2746 24.7036C10.4148 20.9215 11.98 17.3323 14.6561 14.6561C17.3323 11.98 20.9215 10.4148 24.7036 10.2746C28.4857 10.1344 32.1809 11.4296 35.0478 13.9003Z"
                  fill="#D9D9D9"
                  fill-opacity="0.8"
                />
                <path
                  d="M50.0025 40.0058C47.3513 40.0058 44.8086 41.059 42.9339 42.9337C41.0592 44.8084 40.006 47.351 40.006 50.0022C40.006 52.6535 41.0592 55.1961 42.9339 57.0708C44.8086 58.9455 47.3513 59.9987 50.0025 59.9987C52.6537 59.9987 55.1963 58.9455 57.071 57.0708C58.9457 55.1961 59.9989 52.6535 59.9989 50.0022C59.9989 47.351 58.9457 44.8084 57.071 42.9337C55.1963 41.059 52.6537 40.0058 50.0025 40.0058ZM35.8675 35.8673C37.7118 33.9577 39.9179 32.4346 42.3571 31.3868C44.7963 30.339 47.4198 29.7875 50.0744 29.7644C52.7291 29.7414 55.3617 30.2472 57.8188 31.2525C60.2758 32.2577 62.5081 33.7423 64.3853 35.6195C66.2625 37.4966 67.747 39.7289 68.7523 42.1859C69.7575 44.643 70.2634 47.2756 70.2403 49.9303C70.2172 52.5849 69.6657 55.2084 68.6179 57.6476C67.5701 60.0868 66.047 62.2929 64.1375 64.1372C60.3668 67.7791 55.3165 69.7942 50.0744 69.7487C44.8324 69.7031 39.8179 67.6005 36.1111 63.8937C32.4042 60.1868 30.3016 55.1724 30.256 49.9303C30.2105 44.6882 32.2257 39.638 35.8675 35.8673Z"
                  fill="#D9D9D9"
                  fill-opacity="0.8"
                />
              </svg>
    `,
  third: `
        <svg
                  viewBox="0 0 110 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M103.636 0H5.45455C4.00843 0.00168419 2.62202 0.576898 1.59946 1.59946C0.576899 2.62202 0.00168419 4.00843 0 5.45455V94.5455C0.00168419 95.9916 0.576899 97.378 1.59946 98.4005C2.62202 99.4231 4.00843 99.9983 5.45455 100H103.636C105.082 99.9983 106.469 99.4231 107.491 98.4005C108.514 97.378 109.089 95.9916 109.091 94.5455V5.45455C109.089 4.00843 108.514 2.62202 107.491 1.59946C106.469 0.576898 105.082 0.00168419 103.636 0ZM101.818 92.7273H7.27273V7.27273H101.818V92.7273Z"
                    fill="#D9D9D9"
                    fill-opacity="0.8"
                  />
                  <path
                    d="M22.7186 55.1425L39.4107 36.3534L22.7173 17.5834L17.2827 22.4166L29.6802 36.3559L17.2814 50.312L22.7186 55.1425Z"
                    fill="#D9D9D9"
                    fill-opacity="0.8"
                  />
                  <path
                    d="M74.5455 45.4546H45.4546V52.7273H74.5455V45.4546Z"
                    fill="#D9D9D9"
                    fill-opacity="0.8"
                  />
                </svg>
    `,
  Fourth: `
        <svg
                  viewBox="0 0 75 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M75 28.125C75 19.4922 68.0078 12.5 59.375 12.5C50.7422 12.5 43.75 19.4922 43.75 28.125C43.75 35.2344 48.4961 41.2305 54.9805 43.125C54.8633 46.2695 54.1602 48.6914 52.832 50.332C49.8242 54.082 43.2031 54.707 36.1914 55.3516C30.6836 55.8594 24.9805 56.4062 20.3125 58.6523V30.5273C26.6602 28.5352 31.25 22.6172 31.25 15.625C31.25 6.99219 24.2578 0 15.625 0C6.99219 0 0 6.99219 0 15.625C0 22.6172 4.58984 28.5352 10.9375 30.5273V69.4531C4.58984 71.4648 0 77.3828 0 84.375C0 93.0078 6.99219 100 15.625 100C24.2578 100 31.25 93.0078 31.25 84.375C31.25 77.7344 27.1094 72.0508 21.25 69.8047C21.8555 68.7891 22.7734 67.8906 24.1602 67.1875C27.3242 65.5859 32.0508 65.1562 37.0703 64.6875C45.3125 63.9258 54.6484 63.0469 60.1562 56.2109C62.8906 52.8125 64.2773 48.4375 64.375 42.9492C70.5469 40.8398 75 35 75 28.125ZM15.625 12.5C17.3438 12.5 18.75 13.9062 18.75 15.625C18.75 17.3438 17.3438 18.75 15.625 18.75C13.9062 18.75 12.5 17.3438 12.5 15.625C12.5 13.9062 13.9062 12.5 15.625 12.5ZM15.625 87.5C13.9062 87.5 12.5 86.0938 12.5 84.375C12.5 82.6562 13.9062 81.25 15.625 81.25C17.3438 81.25 18.75 82.6562 18.75 84.375C18.75 86.0938 17.3438 87.5 15.625 87.5ZM59.375 25C61.0938 25 62.5 26.4062 62.5 28.125C62.5 29.8438 61.0938 31.25 59.375 31.25C57.6562 31.25 56.25 29.8438 56.25 28.125C56.25 26.4062 57.6562 25 59.375 25Z"
                    fill="#D9D9D9"
                    fill-opacity="0.8"
                  />
                </svg>
    `,
  Fifth: `
        <svg
                width="106"
                height="106"
                viewBox="0 0 106 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.5281 0C42.1391 0 31.9833 3.08072 23.3451 8.85258C14.7069 14.6244 7.97422 22.8282 3.99849 32.4265C0.0227596 42.0247 -1.01747 52.5864 1.00934 62.7758C3.03614 72.9653 8.03896 82.3249 15.3851 89.6711C22.7313 97.0173 32.091 102.02 42.2804 104.047C52.4699 106.074 63.0315 105.033 72.6298 101.058C82.228 97.082 90.4318 90.3494 96.2036 81.7112C101.976 73.073 105.056 62.9172 105.056 52.5281C105.056 45.63 103.698 38.7995 101.058 32.4265C98.418 26.0535 94.5488 20.2628 89.6711 15.3851C84.7934 10.5074 79.0028 6.63825 72.6298 3.99846C66.2568 1.35868 59.4262 0 52.5281 0ZM52.5281 94.5506C44.2169 94.5506 36.0922 92.086 29.1817 87.4685C22.2711 82.851 16.885 76.288 13.7044 68.6094C10.5238 60.9308 9.69165 52.4815 11.3131 44.3299C12.9345 36.1784 16.9368 28.6907 22.8137 22.8137C28.6907 16.9368 36.1784 12.9345 44.33 11.3131C52.4815 9.69163 60.9308 10.5238 68.6094 13.7044C76.288 16.885 82.8511 22.2711 87.4685 29.1817C92.086 36.0922 94.5506 44.2168 94.5506 52.5281C94.5506 63.6732 90.1233 74.3617 82.2425 82.2425C74.3618 90.1232 63.6732 94.5506 52.5281 94.5506Z"
                  fill="#D9D9D9"
                  fill-opacity="0.8"
                />
                <path
                  d="M52.5281 21.0116C47.6522 21.0116 42.9759 22.9486 39.5281 26.3964C36.0803 29.8442 34.1433 34.5205 34.1433 39.3964C34.1433 40.7896 34.6967 42.1256 35.6818 43.1107C36.6669 44.0958 38.003 44.6492 39.3961 44.6492C40.7892 44.6492 42.1253 44.0958 43.1104 43.1107C44.0955 42.1256 44.6489 40.7896 44.6489 39.3964C44.6489 37.8381 45.111 36.3147 45.9768 35.019C46.8426 33.7232 48.0732 32.7133 49.5129 32.117C50.9526 31.5206 52.5369 31.3646 54.0653 31.6686C55.5937 31.9726 56.9977 32.723 58.0996 33.825C59.2015 34.9269 59.9519 36.3308 60.256 37.8593C60.56 39.3877 60.4039 40.9719 59.8076 42.4117C59.2112 43.8514 58.2013 45.082 56.9056 45.9478C55.6099 46.8135 54.0865 47.2756 52.5281 47.2756C51.135 47.2756 49.7989 47.8291 48.8138 48.8141C47.8287 49.7992 47.2753 51.1353 47.2753 52.5284V63.0341C47.2753 64.4272 47.8287 65.7633 48.8138 66.7484C49.7989 67.7335 51.135 68.2869 52.5281 68.2869C53.9213 68.2869 55.2573 67.7335 56.2424 66.7484C57.2275 65.7633 57.781 64.4272 57.781 63.0341V56.9408C62.0258 55.7012 65.6794 52.969 68.0685 49.2477C70.4576 45.5265 71.4211 41.0672 70.7814 36.6916C70.1417 32.316 67.9419 28.3191 64.5875 25.4375C61.2331 22.556 56.9502 20.9841 52.5281 21.0116Z"
                  fill="#D9D9D9"
                  fill-opacity="0.8"
                />
                <path
                  d="M52.5281 84.0449C55.4292 84.0449 57.781 81.6932 57.781 78.7921C57.781 75.8911 55.4292 73.5393 52.5281 73.5393C49.6271 73.5393 47.2753 75.8911 47.2753 78.7921C47.2753 81.6932 49.6271 84.0449 52.5281 84.0449Z"
                  fill="#D9D9D9"
                  fill-opacity="0.8"
                />
              </svg>
    `,
};

export default svgPaths;
