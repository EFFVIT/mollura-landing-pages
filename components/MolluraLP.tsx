'use client'
import { Suspense, useState } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

// ── DESIGN TOKENS ──────────────────────────────────────────────────────────
const DARK_NAV  = '#2a2a34'
const DARK      = '#175566'
const DARK_CARD = '#1a3f4f'
const TEAL      = '#337b8f'
const STEEL     = '#5a677c'
const PANEL     = '#eef4f8'
const WHITE     = '#ffffff'

// ── STEP ICONS ─────────────────────────────────────────────────────────────

function StepIcon1() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="90" viewBox="0 0 106 119" fill="none" aria-hidden="true">
      <g clipPath="url(#mol-s1)">
        <path d="M90.9953 75.52C94.906 76.8872 98.3159 79.3037 100.899 82.4312C104.086 86.2969 106 91.2427 106 96.6294C106 102.016 104.161 106.784 101.081 110.612C96.9643 115.726 90.6454 119 83.5479 119C77.2119 119 71.4865 116.385 67.4078 112.178C65.4799 110.195 63.9156 107.854 62.8316 105.267C61.7167 102.607 61.0992 99.6919 61.0992 96.6294C61.0992 85.1348 69.8056 75.6567 81.0128 74.4023C81.843 74.3101 82.6903 74.2588 83.5513 74.2588C86.1653 74.2588 88.6661 74.6997 90.9988 75.52H90.9953Z" fill="white"/>
        <path d="M57.0479 83.9009C57.8197 83.9009 58.4818 84.3999 58.7219 85.0938C57.0719 88.5938 56.156 92.5005 56.156 96.6226H47.8201C46.8458 96.6226 46.0534 95.8364 46.0534 94.8623V85.668C46.0534 84.6973 46.8424 83.9043 47.8201 83.9043H57.0479V83.9009Z" fill="white"/>
        <path d="M41.3297 85.6646V94.8589C41.3297 95.8296 40.5407 96.6191 39.5596 96.6191H30.3352C29.361 96.6191 28.5651 95.833 28.5651 94.8589V85.6646C28.5651 84.6938 29.361 83.9009 30.3352 83.9009H39.5596C40.5407 83.9009 41.3297 84.6938 41.3297 85.6646Z" fill="white"/>
        <path d="M23.8414 85.6646V94.8589C23.8414 95.8296 23.0524 96.6191 22.0748 96.6191H12.8469C11.8727 96.6191 11.0803 95.833 11.0803 94.8589V85.6646C11.0803 84.6938 11.8693 83.9009 12.8469 83.9009H22.0748C23.049 83.9009 23.8414 84.6938 23.8414 85.6646Z" fill="white"/>
        <path d="M81.0231 69.4497V66.0112C81.0231 65.0405 81.8121 64.251 82.7898 64.251H92.0176C92.9918 64.251 93.7877 65.0371 93.7877 66.0112V71.3057C90.6283 70.0342 87.167 69.3335 83.5479 69.3335C82.6937 69.3335 81.8533 69.3745 81.0197 69.4497H81.0231Z" fill="white"/>
        <path d="M76.2994 66.0112V70.3008C71.8742 71.5039 67.9017 73.7905 64.6703 76.853C64.0082 76.6035 63.5314 75.9609 63.5314 75.209V66.0146C63.5314 65.0439 64.3272 64.2544 65.3015 64.2544H74.5259C75.507 64.2544 76.296 65.0405 76.296 66.0146L76.2994 66.0112Z" fill="white"/>
        <path d="M58.818 66.0112V75.2056C58.818 76.1763 58.0221 76.9692 57.0479 76.9692H47.8201C46.8458 76.9692 46.0534 76.1763 46.0534 75.2056V66.0112C46.0534 65.0405 46.8424 64.251 47.8201 64.251H57.0479C58.0221 64.251 58.818 65.0371 58.818 66.0112Z" fill="white"/>
        <path d="M41.3297 66.0112V75.2056C41.3297 76.1763 40.5407 76.9692 39.5596 76.9692H30.3352C29.361 76.9692 28.5651 76.1763 28.5651 75.2056V66.0112C28.5651 65.0405 29.361 64.251 30.3352 64.251H39.5596C40.5407 64.251 41.3297 65.0371 41.3297 66.0112Z" fill="white"/>
        <path d="M22.0748 64.251H12.8469C11.8712 64.251 11.0803 65.0391 11.0803 66.0112V75.209C11.0803 76.1811 11.8712 76.9692 12.8469 76.9692H22.0748C23.0505 76.9692 23.8414 76.1811 23.8414 75.209V66.0112C23.8414 65.0391 23.0505 64.251 22.0748 64.251Z" fill="white"/>
        <path d="M93.7877 46.3647V55.5557C93.7877 56.5264 92.9918 57.3193 92.0176 57.3193H82.7898C81.8155 57.3193 81.0231 56.5264 81.0231 55.5557V46.3647C81.0231 45.3872 81.8121 44.6011 82.7898 44.6011H92.0176C92.9918 44.6011 93.7877 45.3872 93.7877 46.3647Z" fill="white"/>
        <path d="M76.2994 46.3647V55.5557C76.2994 56.5264 75.5104 57.3193 74.5293 57.3193H65.3049C64.3307 57.3193 63.5348 56.5264 63.5348 55.5557V46.3647C63.5348 45.3872 64.3307 44.6011 65.3049 44.6011H74.5293C75.5104 44.6011 76.2994 45.3872 76.2994 46.3647Z" fill="white"/>
        <path d="M58.818 46.3647V55.5557C58.818 56.5264 58.0221 57.3193 57.0479 57.3193H47.8201C46.8458 57.3193 46.0534 56.5264 46.0534 55.5557V46.3647C46.0534 45.3872 46.8424 44.6011 47.8201 44.6011H57.0479C58.0221 44.6011 58.818 45.3872 58.818 46.3647Z" fill="white"/>
        <path d="M41.3297 46.3647V55.5557C41.3297 56.5264 40.5407 57.3193 39.5596 57.3193H30.3352C29.361 57.3193 28.5651 56.5264 28.5651 55.5557V46.3647C28.5651 45.3872 29.361 44.6011 30.3352 44.6011H39.5596C40.5407 44.6011 41.3297 45.3872 41.3297 46.3647Z" fill="white"/>
        <path d="M23.8414 46.3647V55.5557C23.8414 56.5264 23.0524 57.3193 22.0748 57.3193H12.8469C11.8727 57.3193 11.0803 56.5264 11.0803 55.5557V46.3647C11.0803 45.3872 11.8693 44.6011 12.8469 44.6011H22.0748C23.049 44.6011 23.8414 45.3872 23.8414 46.3647Z" fill="white"/>
        <path d="M85.6164 5.33545V9.50195H74.9067V5.33545C74.9067 2.38574 77.3045 0 80.2616 0C83.2186 0 85.6164 2.38574 85.6164 5.33545Z" fill="white"/>
        <path d="M85.6164 9.50195V18.71C85.6164 21.6563 83.2186 24.0454 80.2616 24.0454C77.3045 24.0454 74.9067 21.6563 74.9067 18.71V9.50195H85.6164Z" fill="white"/>
        <path d="M30.3009 5.33545V9.50195H19.5911V5.33545C19.5911 2.38574 21.989 0 24.946 0C27.903 0 30.3009 2.38574 30.3009 5.33545Z" fill="white"/>
        <path d="M30.3009 9.50195V18.71C30.3009 21.6563 27.903 24.0454 24.946 24.0454C21.989 24.0454 19.5911 21.6563 19.5911 18.71V9.50195H30.3009Z" fill="white"/>
        <path d="M57.3601 104.675C58.0702 106.965 59.0684 109.125 60.3171 111.111H10.7509C4.81631 111.111 0 106.312 0 100.399V20.207C0 14.2939 4.81631 9.50195 10.7509 9.50195H14.9429V18.71C14.9429 24.2061 19.4265 28.6768 24.946 28.6768C30.4656 28.6768 34.9491 24.2095 34.9491 18.71V9.50195H70.2619V18.71C70.2619 24.2061 74.7523 28.6768 80.265 28.6768C85.7777 28.6768 90.2681 24.2095 90.2681 18.71V9.50195H94.4601C100.395 9.50195 105.211 14.2939 105.211 20.207V79.9053C103.636 77.8853 101.784 76.0908 99.712 74.5801V36.5415H5.50583V97.4736C5.50583 101.449 8.74071 104.672 12.7303 104.672H57.3601V104.675Z" fill="white"/>
        <path d="M82.1037 108.24C81.4176 108.24 80.7556 107.994 80.2307 107.546L69.5106 98.3042C68.3168 97.2754 68.1865 95.4741 69.219 94.2846C70.255 93.0918 72.0594 92.9653 73.2532 93.9941L81.6886 101.264L93.4515 86.1225C94.4189 84.8784 96.2165 84.6494 97.4651 85.6132C98.7138 86.5771 98.9436 88.3681 97.9763 89.6123L84.3644 107.133C83.8841 107.751 83.1671 108.148 82.385 108.227C82.289 108.237 82.1963 108.24 82.1003 108.24H82.1037Z" fill="#2A548B"/>
      </g>
      <defs><clipPath id="mol-s1"><rect width="106" height="119" fill="white"/></clipPath></defs>
    </svg>
  )
}

function StepIcon2() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 124 125" fill="none" aria-hidden="true">
      <path d="M101.963 80.3571C102.982 80.3571 103.981 80.4419 104.967 80.5655C99.5599 74.5818 94.1157 74.122 92.4764 73.741C87.4207 72.5654 81.2926 73.0654 78.0276 72.0565C77.6436 75.2366 68.321 85.6964 62.2124 92.2559L59.5623 82.125C61.554 80.9643 61.9874 78.3928 61.9874 76.2544H51.9464C51.9464 78.375 52.3753 80.9181 54.3265 82.0967L51.7214 92.2544C45.6098 85.6934 36.2902 75.2336 35.9062 72.0565C32.6397 73.0699 26.5161 72.5699 21.4574 73.744C18.8867 74.3348 6.9515 75.0922 0.491943 97.1503C-0.383929 100.147 -0.0764741 103.394 1.34832 106.067C6.64554 115.994 34.474 119.049 56.9707 119.048C65.1295 119.048 73.9842 118.641 82.215 117.658C79.5424 113.821 77.9661 109.174 77.9661 104.167C77.9661 91.0387 88.733 80.3571 101.964 80.3571H101.963Z" fill="white"/>
      <path d="M30.3871 48.5848C32.7657 54.939 36.5332 61.1086 41.1945 65.6265C43.8311 68.183 46.7527 70.2068 49.8692 71.433C52.0124 72.2753 54.2456 72.7411 56.5417 72.7411C58.8379 72.7411 61.0726 72.2753 63.2142 71.433C66.4373 70.1637 69.4593 68.0431 72.1649 65.3571C76.7108 60.8542 80.3837 54.7798 82.7189 48.5327C84.5141 48.0089 86.3933 44.6726 87.1612 40.4107C87.9921 35.7887 87.2062 31.7559 85.4095 31.0818C85.4725 29.9539 85.5145 28.8125 85.5115 27.6428C85.468 10.8824 75.5649 1.13987 59.9492 0.101184C46.3342 -0.805066 36.0772 4.56249 31.4054 13.4836C29.8321 16.4851 28.9353 20.2396 28.5903 24.3199C28.0684 26.4449 27.7579 28.6518 27.7579 30.9345H27.8089C27.7699 30.9925 27.704 31 25.7137 31.3437C24.8064 35.5595 25.6807 40.4152 26.4801 44.8765C28.5093 48.3274 30.3841 48.5878 30.3871 48.5848Z" fill="white"/>
      <path d="M108.252 84.1746C111.882 85.4478 115.048 87.6982 117.445 90.6108C120.404 94.2108 122.181 98.8168 122.181 103.833C122.181 108.85 120.474 113.29 117.614 116.855C113.793 121.617 107.927 124.667 101.339 124.667C95.4571 124.667 90.1424 122.232 86.3561 118.313C84.5665 116.467 83.1144 114.287 82.1081 111.877C81.0732 109.401 80.5 106.685 80.5 103.833C80.5 93.1286 88.582 84.3019 98.9855 83.1337C99.7561 83.0477 100.543 83 101.342 83C103.768 83 106.09 83.4106 108.255 84.1746H108.252Z" fill="white"/>
      <path d="M99.7436 114.833C99.1251 114.833 98.5282 114.613 98.0551 114.211L88.3908 105.92C87.3146 104.997 87.1971 103.381 88.128 102.314C89.0619 101.244 90.6886 101.13 91.7648 102.053L99.3694 108.575L109.974 94.9919C110.846 93.8758 112.466 93.6704 113.592 94.535C114.718 95.3997 114.925 97.0064 114.053 98.1225L101.782 113.84C101.349 114.395 100.702 114.751 99.9972 114.821C99.9106 114.83 99.8271 114.833 99.7405 114.833H99.7436Z" fill="#2A548B"/>
    </svg>
  )
}

function StepIcon3() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="84" viewBox="0 0 133 139" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M110.071 93.3247C122.735 93.3247 133 103.552 133 116.162C133 128.773 122.735 139 110.071 139C97.4076 139 87.1426 128.776 87.1426 116.162C87.1426 103.549 97.4076 93.3247 110.071 93.3247ZM37.262 80.4141C7.4524 93.7734 2.73658 92.29 1.49217 108.369C0.247756 124.452 0 131.874 0 131.874H90.2987C86.8442 127.564 84.7776 122.107 84.7776 116.162C84.7776 104.284 93.0324 94.3258 104.139 91.6674C98.866 88.9249 90.828 85.9412 78.4937 80.4113L77.5899 80.3131L67.3221 116.039L61.4858 103.047V91.4319H62.474C63.9014 91.4319 65.0698 90.2709 65.0698 88.8464V84.8279C65.0698 83.4062 63.9014 82.2424 62.474 82.2424H53.3689C51.9415 82.2424 50.7731 83.4034 50.7731 84.8279V88.8464C50.7731 90.2681 51.9387 91.4319 53.3689 91.4319H54.2699V103.047L48.4307 116.039L38.1629 80.3131L37.2591 80.4113L37.262 80.4141ZM36.8791 6.12724C35.0913 4.09137 33.3288 2.0555 31.5608 0H59.0504C68.7298 0 71.1116 2.4509 76.2751 9.76713L76.368 9.90734H76.6524L76.9452 9.91295C88.8741 10.3841 87.0075 28.6873 86.0756 36.4409C87.7986 36.8391 88.539 38.1151 88.3842 39.8341C88.0745 43.2468 87.5931 46.2137 86.9089 48.8861C84.7439 57.3661 80.2955 63.1372 74.4507 69.5365C64.5855 81.8358 48.8108 82.7191 38.6105 67.9745C34.9364 62.6661 27.881 52.5092 27.881 45.6528C27.881 43.3422 28.2217 40.5856 29.3422 38.4852C27.6164 33.0731 26.8928 26.6906 27.6361 21.0513C28.6496 13.4042 31.2116 10.9169 36.8791 6.12444V6.12724ZM97.8299 111.835L106.656 120.624L122.113 103.56L126.297 107.312L106.862 128.77L93.8461 115.806L97.8299 111.838V111.835Z" fill="white"/>
    </svg>
  )
}

// ── COMMITMENT ICONS ────────────────────────────────────────────────────────

function CapabilitiesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="79" viewBox="0 0 157 138" fill="none" aria-hidden="true">
      <g clipPath="url(#mol-c1)">
        <path d="M103.703 11.6079H80.2005C81.5097 13.8846 82.0419 16.514 81.7918 19.0739H103.703C109.616 19.0739 114.465 23.9425 114.465 29.88V38.5538C115.668 38.4095 116.908 38.34 118.18 38.34C119.452 38.34 120.66 38.4095 121.895 38.5538V29.88C121.895 19.8221 113.72 11.6079 103.698 11.6079H103.703ZM44.2329 104.128V89.9123H36.7978V104.128C36.7978 114.186 44.9727 122.4 54.9891 122.4H71.2006C71.5199 119.84 72.0841 117.355 72.8664 114.934H54.9891C49.0761 114.934 44.2276 110.098 44.2276 104.128H44.2329Z" fill={TEAL}/>
        <path d="M134.758 95.4972L134.077 95.23L133.444 95.5934C123.992 101.039 112.368 101.039 102.916 95.5934L102.282 95.23L101.596 95.4972C88.0826 100.761 79.3489 113.534 79.3489 128.017V133.233C79.3489 135.868 81.4778 138.006 84.1016 138.006H152.247C154.871 138.006 157 135.868 157 133.233V128.017C157 113.534 148.272 100.761 134.758 95.4972Z" fill={TEAL}/>
        <path d="M118.174 46.8589C106.066 46.8589 96.215 56.7511 96.215 68.904C96.215 81.0569 106.066 90.9492 118.174 90.9492C130.282 90.9492 140.134 81.0623 140.134 68.904C140.134 56.7458 130.282 46.8589 118.174 46.8589Z" fill={TEAL}/>
        <path d="M77.6138 32.4024L70.2266 31.3228C69.3005 29.0782 69.0504 28.4743 68.1243 26.2244L72.5897 20.2174C73.7819 18.6141 73.6222 16.3749 72.2118 14.9586L66.1498 8.8715C64.7447 7.45527 62.5147 7.29494 60.9181 8.49206L54.9359 12.9759C52.6952 12.0407 52.0992 11.7948 49.8585 10.8649L48.7834 3.44706C48.496 1.46433 46.8089 0 44.8184 0H36.2443C34.2538 0 32.5613 1.46433 32.2792 3.44706L31.2041 10.8649C28.9635 11.7948 28.3674 12.0407 26.1267 12.9759L20.1446 8.49206C18.5479 7.29494 16.3232 7.45527 14.9128 8.8715L8.85084 14.9586C7.44045 16.3749 7.28078 18.6088 8.47296 20.2121L12.9383 26.219C12.0122 28.469 11.7621 29.0729 10.836 31.3175L3.44879 32.397C1.47957 32.6803 0.015961 34.3797 0.015961 36.3785V44.9881C0.015961 46.9922 1.47957 48.6864 3.44879 48.975L10.836 50.0492C11.7621 52.2991 12.0122 52.903 12.9383 55.153L8.47296 61.1599C7.28611 62.7632 7.44577 65.0025 8.85084 66.4187L14.9128 72.5058C16.3232 73.9221 18.5479 74.0824 20.1446 72.8906L26.1267 68.4068C28.3674 69.3367 28.9635 69.5879 31.2041 70.5178L32.2792 77.9356C32.5666 79.913 34.2538 81.3827 36.2443 81.3827H44.8184C46.8089 81.3827 48.5013 79.913 48.7834 77.9356L49.8585 70.5178C52.0992 69.5879 52.6952 69.3367 54.9359 68.4068L60.9181 72.8906C62.5147 74.0877 64.7447 73.9221 66.1498 72.5058L72.2118 66.4187C73.6222 65.0078 73.7819 62.7632 72.5897 61.1599L68.1137 55.1369C69.0398 52.8977 69.2846 52.2938 70.2106 50.0545L77.6192 48.975C79.5884 48.6864 81.052 46.9922 81.052 44.9881V36.3785C81.052 34.3797 79.5884 32.6803 77.6192 32.397L77.6138 32.4024ZM56.9849 35.3791L39.0171 53.4214C38.1869 54.2551 37.0958 54.672 36.0048 54.672C34.9137 54.672 33.8227 54.2551 32.9924 53.4214L24.0617 44.4591C22.3959 42.7863 22.3959 40.0768 24.0617 38.4093C25.7276 36.7366 28.4206 36.7419 30.0865 38.4093L36.0048 44.3468L50.9602 29.3294C52.626 27.6566 55.3191 27.6566 56.9849 29.3294C58.6508 30.9968 58.6508 33.7064 56.9849 35.3791Z" fill="black"/>
      </g>
      <defs><clipPath id="mol-c1"><rect width="157" height="138" fill="white"/></clipPath></defs>
    </svg>
  )
}

function SafetyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="69" viewBox="0 0 160 122" fill="none" aria-hidden="true">
      <g clipPath="url(#mol-c2)">
        <path d="M156.089 36.9647L147.626 35.7428C146.572 33.1668 146.323 32.4921 145.226 29.9209L150.361 23.0847C151.707 21.2258 151.538 18.697 149.9 17.0929L142.995 10.1293C141.353 8.52523 138.83 8.35539 137.018 9.70942L130.156 14.8142C127.591 13.7574 126.913 13.4649 124.348 12.4081L123.129 3.92529C122.79 1.68901 120.898 0 118.625 0H108.816C106.543 0 104.608 1.68901 104.269 3.92529L103.05 12.4081C100.481 13.4649 99.8076 13.7574 97.2425 14.8142L90.4227 9.70942C88.573 8.36011 86.0456 8.52995 84.4454 10.1293L77.4985 17.0929C76.4018 18.5696 76.2371 19.4566 76.2371 19.4991C77.3337 20.1737 78.3409 21.0182 79.2258 21.9901C82.1297 25.2407 83.5182 29.5434 83.0569 34.1859C82.3839 40.8522 81.3296 45.1125 80.3224 49.2501C79.9835 50.5994 79.6494 51.9487 79.3105 53.383H96.273C95.3881 51.2316 94.9269 48.9104 94.9269 46.4194C94.9269 36.04 103.347 27.5997 113.701 27.5997C124.056 27.5997 132.476 36.04 132.476 46.4194C132.476 56.7987 124.056 65.239 113.701 65.239C113.071 65.239 112.398 65.1966 111.762 65.1541C112.016 66.2534 112.144 67.4328 112.144 68.6123C112.144 71.8205 111.174 74.8164 109.451 77.2602C110.713 79.9164 111.221 82.9123 110.84 85.8704C110.501 88.319 109.574 90.5977 108.228 92.4943C108.355 92.7066 108.524 92.834 108.816 92.834H118.625C120.898 92.834 122.79 91.1874 123.129 88.9087L124.348 80.4684C126.913 79.4116 127.591 79.1191 130.156 78.0623L137.018 83.167C138.83 84.5163 141.353 84.3465 142.995 82.7471L149.9 75.7835C151.542 74.1794 151.712 71.6082 150.361 69.7918L145.226 62.9131C146.28 60.3796 146.572 59.6625 147.626 57.1337L156.089 55.8693C158.362 55.5721 160.005 53.633 160.005 51.3543V41.5222C160.005 39.2434 158.362 37.3044 156.089 36.9647Z" fill="black"/>
        <path d="M95.7694 76.2319H96.9695C101.154 76.2319 104.58 72.802 104.58 68.6031C104.58 64.4041 101.158 60.9742 96.9695 60.9742H72.8484C71.4128 60.9742 70.4339 59.8136 70.6551 58.3888C72.2742 47.901 74.4298 44.3106 75.5029 33.4217C76.5336 22.9339 61.6655 21.1316 59.5146 30.8127C55.4952 48.8964 40.566 61.0592 35.6288 64.6542C34.6263 65.3855 34.0332 66.5461 34.0332 67.7869V111.14C34.0332 112.692 34.9651 114.093 36.3912 114.706C41.6814 116.966 47.7435 121.991 65.5579 121.991H93.3643C97.5485 121.991 100.975 118.561 100.975 114.362C100.975 110.163 97.5485 106.733 93.3643 106.733H94.2821C98.1462 106.733 101.601 103.973 102.109 100.128C102.721 95.4856 99.0875 91.4801 94.5692 91.4801H95.4823C99.3464 91.4801 102.806 88.7154 103.309 84.8751C103.921 80.228 100.288 76.2225 95.7694 76.2225V76.2319Z" fill={TEAL}/>
        <path d="M22.568 65.6919H3.8641C1.73202 65.6919 0 67.4281 0 69.5653V109.837C0 111.979 1.73202 113.711 3.8641 113.711H22.5633C24.7001 113.711 26.4274 111.974 26.4274 109.837V69.5653C26.4274 67.4281 24.6954 65.6919 22.5633 65.6919H22.568Z" fill={TEAL}/>
      </g>
      <defs><clipPath id="mol-c2"><rect width="160" height="122" fill="white"/></clipPath></defs>
    </svg>
  )
}

function PatientFirstIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="84" viewBox="0 0 136 127" fill="none" aria-hidden="true">
      <g clipPath="url(#mol-c3)">
        <path d="M25.6301 33.6526C34.8807 33.6526 42.3723 26.1162 42.3723 16.8263C42.3723 7.53636 34.8807 0 25.6301 0C16.3796 0 8.89777 7.53144 8.89777 16.8263C8.89777 26.1211 16.3894 33.6526 25.6301 33.6526Z" fill={TEAL}/>
        <path d="M35.1306 74.541L36.6691 61.5518C37.4971 54.8331 40.873 48.9814 45.758 44.9866C42.4899 40.8342 37.4237 38.2285 31.8625 38.2285H19.3978C10.4265 38.2285 2.84182 44.9866 1.7541 54.0007L0.029414 68.5365C-0.195971 70.4231 1.00935 72.2013 2.84672 72.6101C10.0541 74.1617 17.678 74.9547 25.6351 74.9547C28.8639 74.9547 32.0585 74.8365 35.1355 74.541H35.1306Z" fill={TEAL}/>
        <path d="M110.375 33.6526C119.62 33.6526 127.112 26.1162 127.112 16.8263C127.112 7.53636 119.62 0 110.375 0C101.129 0 93.6424 7.53144 93.6424 16.8263C93.6424 26.1211 101.134 33.6526 110.375 33.6526Z" fill={TEAL}/>
        <path d="M134.246 54.0056C133.197 44.9866 125.578 38.2334 116.602 38.2334H104.138C98.5813 38.2334 93.515 40.8342 90.2812 44.9915C95.1613 48.9912 98.5421 54.838 99.3309 61.5567L100.869 74.5458C103.946 74.8414 107.141 74.9596 110.37 74.9596C118.327 74.9596 125.951 74.1666 133.158 72.615C135 72.2012 136.201 70.4279 135.976 68.5414L134.246 54.0105V54.0056Z" fill={TEAL}/>
        <path d="M93.6081 77.0286L91.8638 62.4731C90.8055 53.4886 83.211 46.7305 74.2152 46.7305H61.7848C52.789 46.7305 45.2239 53.4886 44.1362 62.4731L42.3919 77.0286C42.1665 78.9152 43.3816 80.7032 45.2288 81.0973C52.4068 82.6341 60.0552 83.4567 68.0024 83.4567C75.9497 83.4567 83.5981 82.6341 90.7712 81.0973C92.6184 80.7032 93.8335 78.9152 93.6081 77.0286Z" fill={TEAL}/>
        <path d="M68.0024 42.1394C77.2481 42.1394 84.7446 34.6031 84.7446 25.3082C84.7446 16.0134 77.2481 8.48193 68.0024 8.48193C58.7568 8.48193 51.2701 16.0134 51.2701 25.3082C51.2701 34.6031 58.7617 42.1394 68.0024 42.1394Z" fill={TEAL}/>
        <path d="M83.8038 102.214L74.5337 101.455L70.952 92.8253C69.8594 90.195 66.1503 90.195 65.0626 92.8253L61.481 101.455L52.2108 102.214C49.3837 102.445 48.2372 105.992 50.3881 107.849L57.4436 113.942L55.2976 123.04C54.641 125.813 57.6445 128.005 60.065 126.522L68.0073 121.656L75.9546 126.522C78.375 128.005 81.3736 125.813 80.722 123.04L78.5759 113.942L85.6314 107.849C87.7824 105.992 86.6359 102.445 83.8087 102.214H83.8038Z" fill="black"/>
        <path d="M126.176 93.7118L116.906 92.9532L113.324 84.3233C112.232 81.693 108.523 81.693 107.435 84.3233L103.853 92.9532L94.5831 93.7118C91.756 93.9433 90.6095 97.4898 92.7604 99.3468L99.816 105.44L97.6699 114.538C97.0133 117.311 100.017 119.503 102.437 118.02L110.38 113.154L118.327 118.02C120.747 119.503 123.746 117.311 123.094 114.538L120.948 105.44L128.009 99.3468C130.16 97.4898 129.013 93.9433 126.186 93.7167L126.176 93.7118Z" fill="black"/>
        <path d="M41.4365 93.7118L32.1663 92.9532L28.5847 84.3233C27.492 81.693 23.783 81.693 22.6953 84.3233L19.1136 92.9532L9.84343 93.7118C7.01633 93.9433 5.8698 97.4898 8.02076 99.3419L15.0763 105.435L12.9302 114.533C12.2737 117.306 15.2772 119.498 17.6976 118.015L25.64 113.149L33.5872 118.015C36.0076 119.498 39.0062 117.306 38.3546 114.533L36.2085 105.435L43.2689 99.3419C45.4199 97.4849 44.2734 93.9384 41.4463 93.7118H41.4365Z" fill="black"/>
      </g>
      <defs><clipPath id="mol-c3"><rect width="136" height="127" fill="white"/></clipPath></defs>
    </svg>
  )
}

// ── FEATURE CHECK ICON ───────────────────────────────────────────────────────

function FeatureCheckIcon() {
  return (
    <svg viewBox="0 0 85.554 84" width="84" height="84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0, display: 'block' }}>
      {/* Badge outer shape: white fill + blue border */}
      <path
        d="M85.554 41.9998C85.554 37.5331 80.1418 34.0011 78.8632 29.9703C77.5426 25.7932 79.8526 19.6824 77.3861 16.2035C74.8931 12.6929 68.4972 13.0699 65.0749 10.5141C61.6848 7.98407 60.0707 1.61239 55.9973 0.25492C52.0705 -1.05238 47.1307 3.08598 42.7763 3.08598C38.422 3.08598 33.4835 -1.05238 29.5568 0.25492C25.4847 1.61239 23.8707 7.98407 20.4819 10.5141C17.0569 13.0714 10.6609 12.6929 8.1679 16.2035C5.70146 19.681 8.01139 25.7961 6.69083 29.9703C5.41219 34.0011 0 37.5331 0 41.9998C0 46.4664 5.41219 49.997 6.69083 54.0293C8.01139 58.2063 5.70146 64.3171 8.1679 67.7961C10.6609 71.3066 17.0569 70.9296 20.4819 73.4854C23.8707 76.0155 25.4847 82.3871 29.5568 83.7446C33.4835 85.0519 38.4262 80.9136 42.7777 80.9136C47.1293 80.9136 52.0719 85.0534 55.9987 83.7446C60.0707 82.3871 61.6848 76.0155 65.0763 73.4854C68.4986 70.9282 74.8945 71.3066 77.3875 67.7961C79.854 64.3185 77.544 58.2035 78.8646 54.0293C80.1418 49.9984 85.5554 46.4678 85.5554 41.9998H85.554Z"
        fill="white"
      />
      {/* Checkmark: blue, shifted slightly toward center of badge */}
      <path
        transform="translate(0, 4)"
        d="M64.822 33.6413L40.4622 58.6292C39.3471 59.7731 37.8868 60.3436 36.4292 60.3436C34.9717 60.3436 33.5086 59.7731 32.3935 58.6292L20.7321 46.6671C18.5046 44.3822 18.5046 40.6796 20.7321 38.3947C22.9596 36.1097 26.5719 36.1097 28.7994 38.3947L36.4279 46.2198L56.7533 25.3675C58.9808 23.0826 62.5945 23.0826 64.8206 25.3675C67.048 27.6524 67.048 31.355 64.8206 33.6399L64.822 33.6413Z"
        fill={DARK}
      />
    </svg>
  )
}

// ── HELPERS ─────────────────────────────────────────────────────────────────

function StarRow({ size = 16 }: { size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[0, 1, 2, 3, 4].map(i => (
        <span key={i} style={{ fontSize: size, color: '#f5a623', lineHeight: 1 }}>&#9733;</span>
      ))}
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
      <span style={{
        flexShrink: 0,
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: TEAL,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
      }}>
        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" aria-hidden="true">
          <path d="M1 3.5L4 6.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', lineHeight: 1.55 }}>{text}</span>
    </div>
  )
}

// ── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: 'What topics are commonly discussed when learning about hair loss?',
    a: 'Educational discussions often include general information about hair growth cycles, common causes of hair thinning, and factors that may influence hair loss. These conversations are intended to help individuals better understand the topic and ask informed questions.',
  },
  {
    q: 'How long does it take to review educational information about hair loss?',
    a: 'Reviewing educational materials can vary depending on the individual and the topics being explored. Many people take time to read through information at their own pace and revisit sections as needed.',
  },
  {
    q: 'Will the information be tailored to my questions?',
    a: 'Educational information is designed to address common questions and concerns related to hair loss. While the content is informational in nature, individuals are encouraged to focus on the topics most relevant to their interests and understanding.',
  },
]

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section className="mol-pad" style={{ background: WHITE, padding: '80px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 className="mol-h2-xl" style={{
          fontFamily: "'Judson', Georgia, serif",
          fontWeight: 400,
          fontSize: 40,
          lineHeight: 1.129,
          color: DARK,
          textAlign: 'center',
          marginBottom: 36,
        }}>
          Common Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{ borderRadius: 50, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: PANEL,
                    border: 'none',
                    padding: '18px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 24,
                    cursor: 'pointer',
                    textAlign: 'left' as const,
                    borderRadius: isOpen ? '50px 50px 0 0' : 50,
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: 16, fontWeight: 600, color: '#1a1a2e', lineHeight: 1.35 }}>{item.q}</span>
                  <span style={{ fontSize: 24, fontWeight: 300, color: DARK, flexShrink: 0, lineHeight: 1 }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div style={{ background: '#f0f6fa', padding: '20px 28px 24px', borderRadius: '0 0 50px 50px' }}>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: '#444', margin: 0 }}>{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── PROPS ────────────────────────────────────────────────────────────────────

interface Props {
  heroFormId?: string
  bottomFormId?: string
}

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function MolluraLP({
  heroFormId = 'MERXSja58XwPWQkz54I0',
  bottomFormId = 'cp78H1dY6oCkMQF6k56v',
}: Props) {
  return (
    <div style={{ fontFamily: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", color: '#111' }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav className="mol-nav" style={{
        background: WHITE,
        height: 164,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 64px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0px 4px 22.7px 0px rgba(0,0,0,0.45)',
      }}>
        <img
          src="/logo-mollura.png"
          alt="Mollura Medical Hair Restoration"
          className="mol-nav-logo"
          style={{ height: 109, width: 'auto', display: 'block' }}
        />
        <div className="mol-nav-btns" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a
            href="#form"
            className="mol-nav-btn"
            style={{
              background: DARK,
              color: WHITE,
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 18,
              textTransform: 'uppercase' as const,
              borderRadius: 62,
              padding: '15px 22px',
              textDecoration: 'none',
              whiteSpace: 'nowrap' as const,
            }}
          >
            Learn About Hair Loss
          </a>
          <a
            href="tel:+15166144608"
            className="mol-nav-btn"
            style={{
              background: 'transparent',
              color: '#2e2f2a',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 18,
              textTransform: 'uppercase' as const,
              borderRadius: 62,
              padding: '15px 22px',
              textDecoration: 'none',
              whiteSpace: 'nowrap' as const,
            }}
          >
            (516) 614-4608
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="mol-hero" id="form" style={{
        position: 'relative',
        minHeight: 680,
        overflow: 'hidden',
        display: 'flex',
      }}>
        {/* Layer 1: office/room background (full section) */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            src="/hero-bg-room.png"
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center', display: 'block' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.92) 100%)',
          }} />
        </div>

        {/* Layer 2: doctor headshot (left ~62% of hero) */}
        <div className="mol-hero-doctor" style={{ position: 'absolute', left: 0, top: 0, width: '62%', height: '100%', overflow: 'hidden' }}>
          <img
            src="/hero-bg-doctor.png"
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.8) 89%)',
          }} />
        </div>

        {/* Content */}
        <div className="mol-hero-content" style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          width: '100%',
          alignItems: 'stretch',
        }}>
          {/* Left col - text anchored to bottom */}
          <div className="mol-hero-left" style={{
            width: '55%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '64px 56px 64px 64px',
          }}>
            <h1 className="mol-hero-h1" style={{
              fontFamily: "'Judson', Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize: 52,
              color: WHITE,
              lineHeight: 1.13,
              marginBottom: 22,
            }}>
              A Clear Medical Path for Hair Thinning &amp; Hair Loss
            </h1>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 25,
              color: WHITE,
              marginBottom: 14,
              lineHeight: 1.35,
            }}>
              General information reviewed during educational visits
            </p>
            <p style={{
              fontFamily: "'Jost', 'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: 18,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 0,
              lineHeight: 1.55,
              maxWidth: 520,
            }}>
              Request educational information to better understand hair loss topics.
            </p>
          </div>

          {/* Right col - form */}
          <div className="mol-hero-right" style={{
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 56px 48px 24px',
          }}>
            <div style={{
              background: WHITE,
              borderRadius: 8,
              padding: '28px 24px 24px',
              width: '100%',
              maxWidth: 540,
              boxShadow: '10px 10px 10.1px rgba(0,0,0,0.32)',
            }}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: 22,
                color: '#1a1a1a',
                marginBottom: 20,
                textAlign: 'center',
                lineHeight: 1.3,
              }}>
                Request Educational Information
              </p>
              <GhlForm formId={heroFormId} height={400} formName="Hero Form - Mollura Hair Loss" />
            </div>

            {/* Stars + trust line */}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 14, maxWidth: 540, width: '100%' }}>
              <img src="/Group-8.png" alt="5 star rating" style={{ height: 36, width: 'auto', flexShrink: 0 }} />
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: 15,
                color: WHITE,
                lineHeight: 1.45,
                margin: 0,
              }}>
                Patient-focused care.<br />No pressure educational discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPS ────────────────────────────────────────────────────────── */}
      <section className="mol-pad" style={{ background: WHITE, padding: '72px 48px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 className="mol-h2-xl" style={{
            fontFamily: "'Judson', Georgia, serif",
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.129,
            color: '#1a1a1a',
            marginBottom: 16,
            textAlign: 'center',
          }}>
            Your Next Steps Are Simple
          </h2>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: 25,
            color: '#1a1a1a',
            textAlign: 'center',
            marginBottom: 52,
            lineHeight: 'normal',
          }}>
            It&apos;s simpler than you think, and it starts with learning more.
          </p>

          <div className="mol-steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 40,
          }}>
            {[
              { icon: <StepIcon1 />, title: 'Schedule a Physician-led educational visit' },
              { icon: <StepIcon2 />, title: 'Understand Your Hair Loss Pattern' },
              { icon: <StepIcon3 />, title: 'Review Non-Surgical Care Options' },
            ].map((step, i) => (
              <div
                key={i}
                className="mol-step-card"
                style={{
                  background: DARK,
                  border: '7px solid #203e66',
                  borderRadius: 31,
                  padding: '44px 28px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minHeight: 314,
                }}
              >
                <div style={{ flexShrink: 0 }}>{step.icon}</div>
                <div style={{ flex: 1 }} />
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 25,
                  color: WHITE,
                  textAlign: 'center',
                  lineHeight: 1.3,
                  margin: 0,
                }}>
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400,
            fontSize: 18,
            color: '#1a1a1a',
            textAlign: 'center',
            marginTop: 40,
            lineHeight: 'normal',
          }}>
            No pressure. No sales pitch. Just answers.
          </p>
        </div>
      </section>

      {/* ── NOSALES ──────────────────────────────────────────────────────── */}
      <div className="mol-nosales" style={{ background: WHITE, padding: '56px 48px 72px', textAlign: 'center' }}>
        <h2 className="mol-h2-lg" style={{
          fontFamily: "'Judson', Georgia, serif",
          fontWeight: 400,
          fontSize: 40,
          lineHeight: 1.129,
          color: '#1a1a1a',
          marginBottom: 20,
        }}>
          Straight Answers. No Obligation.
        </h2>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: 25,
          color: '#1a1a1a',
          maxWidth: 840,
          margin: '0 auto 40px',
          lineHeight: 'normal',
        }}>
          Educational discussion designed to help you make informed decisions.
        </p>
        <a
          href="#form"
          style={{
            display: 'inline-block',
            background: DARK,
            color: WHITE,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            fontSize: 18,
            textTransform: 'uppercase' as const,
            borderRadius: 62,
            padding: '15px 40px',
            textDecoration: 'none',
          }}
        >
          Learn About Hair Loss
        </a>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 400,
          fontSize: 18,
          color: '#1a1a1a',
          marginTop: 24,
          lineHeight: 'normal',
        }}>
          Fast. Private. No obligation.
        </p>
      </div>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section className="mol-pad" style={{ background: DARK, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 className="mol-h2-xl" style={{
            fontFamily: "'Judson', Georgia, serif",
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.129,
            color: WHITE,
            textAlign: 'center',
            marginBottom: 16,
          }}>
            Why Patients Choose Our Team
          </h2>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: 25,
            color: WHITE,
            textAlign: 'center',
            marginBottom: 52,
            lineHeight: 'normal',
          }}>
            Real care. Real support. Real patient-first focus.
          </p>

          <div className="mol-features-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px 48px',
            marginBottom: 52,
          }}>
            {[
              'Information explaining how hair loss patterns may vary',
              'Educational discussions informed by medical knowledge',
              'Conservative, Non-Surgical Focus',
              'Support at Every Stage',
              'Clear explanations & general educational discussion',
              'Educational discussions informed by clinical experience',
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
                  <FeatureCheckIcon />
                </div>
                <div style={{
                  background: TEAL,
                  borderRadius: 69,
                  padding: '12px 20px 12px 28px',
                  marginLeft: -20,
                  flex: 1,
                  minHeight: 76,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: WHITE,
                    lineHeight: 1.35,
                  }}>
                    {text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mol-btn-row" style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
            <a
              href="#form"
              style={{
                background: '#e6fbfd',
                border: '1px solid #e6fbfd',
                color: '#1a1a1a',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500,
                fontSize: 18,
                textTransform: 'uppercase' as const,
                borderRadius: 62,
                padding: '15px 32px',
                textDecoration: 'none',
                whiteSpace: 'nowrap' as const,
              }}
            >
              Request Educational Information
            </a>
            <a
              href="#form"
              style={{
                background: 'transparent',
                border: '2px solid #e6fbfd',
                color: '#e8f1fa',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500,
                fontSize: 18,
                textTransform: 'uppercase' as const,
                borderRadius: 62,
                padding: '15px 32px',
                textDecoration: 'none',
                whiteSpace: 'nowrap' as const,
              }}
            >
              Learn About Hair Loss
            </a>
          </div>
        </div>
      </section>

      {/* ── BIO ──────────────────────────────────────────────────────────── */}
      <section className="mol-pad" style={{ background: WHITE, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div className="mol-bio-grid" style={{ display: 'grid', gridTemplateColumns: '45% 1fr', gap: 64, alignItems: 'start' }}>

            {/* Photo — LEFT */}
            <div style={{ borderRadius: 5, overflow: 'hidden', flexShrink: 0 }}>
              <img
                src="/dr-mollura.png"
                alt="Dr. Anthony Mollura - Mollura Medical Hair Restoration"
                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
              />
            </div>

            {/* Text — RIGHT */}
            <div>
              <h2 className="mol-h2-xl" style={{
                fontFamily: "'Judson', Georgia, serif",
                fontWeight: 400,
                fontSize: 40,
                lineHeight: 1.129,
                color: '#1a1a1a',
                marginBottom: 16,
              }}>
                Medical Oversight You Can Trust
              </h2>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: 25,
                color: '#1a1a1a',
                lineHeight: 'normal',
                marginBottom: 32,
              }}>
                Feedback collected from educational discussions and shared information.
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: 1.7, color: '#1a1a1a', marginBottom: 20 }}>
                Dr. Mollura&apos;s medical background includes providing general medical care earlier in his career before transitioning his professional focus to hair loss evaluation. His current practice emphasizes clinical assessment, patient education, and individualized planning related to hair loss concerns.
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: 1.7, color: '#1a1a1a', marginBottom: 20 }}>
                Dr. Mollura operates a medical practice dedicated to the evaluation and management of hair loss. Patient care emphasizes direct physician involvement and medically appropriate decision-making.
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: 1.7, color: '#1a1a1a', marginBottom: 40 }}>
                Mollura Medical Hair Restoration provides services in accordance with applicable medical regulations, professional standards, and ethical guidelines related to hair loss evaluation and non-surgical management.
              </p>
              <a
                href="#form"
                style={{
                  display: 'inline-block',
                  background: DARK,
                  color: WHITE,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 18,
                  textTransform: 'uppercase' as const,
                  borderRadius: 62,
                  padding: '15px 32px',
                  textDecoration: 'none',
                }}
              >
                Learn About Hair Loss
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="mol-pad" style={{ background: '#f4f8fb', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 className="mol-h2-xl" style={{
            fontFamily: "'Judson', Georgia, serif",
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.129,
            color: '#000000',
            textAlign: 'center',
            marginBottom: 40,
          }}>
            Real Patients. Real Results.
          </h2>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: 25,
            color: '#000000',
            textAlign: 'center',
            lineHeight: 'normal',
            marginBottom: 40,
          }}>
            Feedback may be collected to improve educational communication. Individual experiences vary.
          </p>
          <div className="mol-reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                text: 'I want to thank Dr. Mollura and the staff for their professionalism and the respectful way my concerns were handled. The team was attentive, supportive, and communicated clearly throughout my experience.',
                name: 'James A.',
              },
              {
                text: 'Thank you for the time, support, and personal approach shown to my family. We appreciated the encouragement, clear communication, and professionalism throughout the process.',
                name: 'Linda C.',
              },
              {
                text: 'I appreciated the professionalism and efficiency of everyone in the office. Dr. Mollura took time to listen and made me feel cared for throughout my visit.',
                name: 'Jonathan S.',
              },
            ].map((review, i) => (
              <div
                key={i}
                style={{
                  background: WHITE,
                  borderRadius: 12,
                  padding: '32px 28px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <img src="/quote-icon.png" alt="" aria-hidden="true" style={{ width: 32, height: 'auto' }} />
                <p style={{ fontSize: 14, lineHeight: 1.75, color: '#444', flex: 1 }}>{review.text}</p>
                <div>
                  <StarRow />
                  <p style={{ fontSize: 13, fontWeight: 700, color: DARK, marginTop: 8 }}>- {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCING ────────────────────────────────────────────────────── */}
      <section className="mol-fin-outer" style={{ background: '#edeeee', padding: '82px 48px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="mol-fin-section">

          {/* Left — text content */}
          <div className="mol-fin-left" style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 className="mol-h2-lg" style={{
              fontFamily: "'Judson', Georgia, serif",
              fontWeight: 400,
              fontSize: 40,
              lineHeight: 1.129,
              color: '#2c2e2b',
              marginBottom: 14,
            }}>
              Getting Help for Hair Loss Can Be{' '}
              <span style={{ color: DARK }}>More Affordable Than You Think</span>
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 25,
              color: '#2c2e2b',
              lineHeight: 'normal',
              marginBottom: 24,
            }}>
              Flexible monthly plans built for real patients.
            </p>
            <div style={{ marginBottom: 32 }}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: 25,
                color: '#2c2e2b',
                lineHeight: 'normal',
                marginBottom: 4,
              }}>As low as</p>
              <p className="mol-price-big" style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 900,
                fontSize: 71,
                color: DARK,
                lineHeight: 1.129,
                margin: 0,
              }}>$188/mo</p>
            </div>

            {/* White card */}
            <div style={{
              background: WHITE,
              borderRadius: 15,
              padding: '32px 40px',
            }}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: 25,
                color: '#2c2e2b',
                lineHeight: 'normal',
                marginBottom: 16,
              }}>
                Fast, simple payment plans
              </p>
              <p style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: 12,
                color: '#000000',
                lineHeight: 1.5,
                marginBottom: 24,
              }}>
                The above payment was calculated at 21.90% APR over 60 months. This purchase would have a total cost of $11,453. A down payment in the amount of monthly payment amount is due at the time of purchase. Payment amount rounded up to nearest whole number. 0% APR and other promotional rates subject to eligibility. Payment options through Cherry Technologies, Inc. are issued by the following lending partners: withcherry.com/lending-partners. See withcherry.com/terms for details.
              </p>
              <a
                href="#form"
                style={{
                  display: 'inline-block',
                  background: DARK,
                  color: WHITE,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 18,
                  textTransform: 'uppercase' as const,
                  borderRadius: 62,
                  padding: '15px 32px',
                  textDecoration: 'none',
                }}
              >
                Request Educational Information
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="mol-fin-photo" style={{ borderRadius: 5, overflow: 'hidden', height: 620 }}>
            <img
              src="/financing-photo.png"
              alt=""
              aria-hidden="true"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>

        </div>
      </section>

      {/* ── COMMITMENT ───────────────────────────────────────────────────── */}
      <section className="mol-pad" style={{ background: WHITE, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 className="mol-h2-xl" style={{
            fontFamily: "'Judson', Georgia, serif",
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.129,
            color: '#000000',
            textAlign: 'center',
            marginBottom: 10,
          }}>
            What Gives Patients Confidence
          </h2>
          <p style={{ fontSize: 16, color: STEEL, marginBottom: 52, lineHeight: 1.5, textAlign: 'center' }}>
            Real capabilities. Real safety. Real patient-first care.
          </p>
          <div className="mol-commit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              {
                icon: <CapabilitiesIcon />,
                title: 'Capabilities',
                items: [
                  'Comprehensive information regarding hair loss patterns',
                  'Educational discussions based on individual questions',
                  'Topics that may include non-surgical educational considerations',
                  'Educational discussion of factors that influence hair loss',
                ],
              },
              {
                icon: <SafetyIcon />,
                title: 'Safety Standards',
                items: [
                  'Evidence-based approaches reviewed by licensed medical providers',
                  'Clean, professional clinical environment with medical-grade protocols',
                  'Clear explanations of commonly discussed topics and considerations',
                ],
              },
              {
                icon: <PatientFirstIcon />,
                title: 'Patient-First Philosophy',
                items: [
                  'Honest assessments - we provide recommendations only when appropriate',
                  'Personalized plans developed around your unique needs and goals',
                  'Direct communication with your doctor at every step of your care journey',
                  'Focus on long-term hair health',
                ],
              },
            ].map((col, i) => (
              <div key={i} style={{
                background: '#f8fbfd',
                borderRadius: 12,
                padding: '36px 28px 32px',
                border: `1px solid #dce8ef`,
              }}>
                <div style={{ marginBottom: 20 }}>{col.icon}</div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 18, color: DARK, marginBottom: 18 }}>
                  {col.title}
                </h3>
                <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#555', lineHeight: 1.55 }}>
                      <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FaqSection />

      {/* ── MAP + FOOTER FORM ─────────────────────────────────────────────── */}
      <section className="mol-map-outer" style={{ background: '#edeeee', padding: '82px 48px 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>

          {/* Two-column grid */}
          <div className="mol-map-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* Map — LEFT */}
            <div className="mol-map-col" style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', minHeight: 320 }}>
              <img
                src="/footer-map.png"
                alt="Mollura Medical Hair Restoration location map"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Visit Our Practice badge */}
              <div style={{
                position: 'absolute',
                top: 24,
                left: 28,
                background: '#d9d9d9',
                borderRadius: 62,
                padding: '12px 20px',
              }}>
                <p style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  color: '#2c2e2b',
                  textTransform: 'uppercase' as const,
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}>Visit Our Practice</p>
              </div>
            </div>

            {/* Form — RIGHT */}
            <div className="mol-form-col">
              <GhlForm formId={bottomFormId} height={500} formName="Footer Form - Mollura Hair Loss" />
            </div>

          </div>

          {/* Phone + Address */}
          <div className="mol-contact-row" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 80,
            padding: '48px 0 32px',
            flexWrap: 'wrap' as const,
          }}>
            <a href="tel:+15166144608" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20.3 16.9L17.6 14.2C16.8 13.4 15.5 13.4 14.7 14.2L13.3 15.6C12.8 16.1 12 16.1 11.5 15.7C10.2 14.8 9 13.7 7.9 12.5C6.8 11.4 5.8 10.2 4.9 8.9C4.5 8.4 4.5 7.6 5 7.1L6.4 5.7C7.2 4.9 7.2 3.6 6.4 2.8L3.7 0.1C2.9-0.7 1.6-0.7 0.8 0.1L0.1 0.8C-1.4 2.3 0.4 7.5 5.8 12.8C11.1 18.1 16.3 19.8 17.8 18.3L18.5 17.6C19.3 16.9 19.3 15.7 18.5 14.9L20.3 16.9Z" fill={DARK}/>
              </svg>
              <span style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
                fontSize: 25,
                color: DARK,
                lineHeight: 'normal',
              }}>(516) 614-4608</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9 0C4 0 0 4 0 9C0 15.8 9 29 9 29C9 29 18 15.8 18 9C18 4 14 0 9 0ZM9 12C7.3 12 6 10.7 6 9C6 7.3 7.3 6 9 6C10.7 6 12 7.3 12 9C12 10.7 10.7 12 9 12Z" fill={DARK}/>
              </svg>
              <div>
                <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 18, color: DARK, lineHeight: 'normal', margin: 0 }}>
                  393 Franklin Avenue Suite 105
                </p>
                <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 18, color: '#2c2e2b', lineHeight: 'normal', margin: 0 }}>
                  Franklin Square, NY 11010
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="mol-footer-bar" style={{ textAlign: 'center', padding: '20px 48px 32px' }}>
          <p style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: '#2c2e2b',
            textTransform: 'uppercase' as const,
            lineHeight: '30px',
            margin: 0,
          }}>
            &copy; 2025 Hair Restoration &bull; <a href="/privacy-policy" style={{ color: '#2c2e2b', textDecoration: 'none' }}>Privacy Policy</a> &bull; <a href="/cookie-policy" style={{ color: '#2c2e2b', textDecoration: 'none' }}>Cookie Policy</a>
          </p>
        </div>
      </section>
    </div>
  )
}
