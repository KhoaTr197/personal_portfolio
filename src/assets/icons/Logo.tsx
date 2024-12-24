import { FC } from 'react'

type LogoIconType = {
  style?: string
}

const LogoIcon:FC<LogoIconType> = ({
  style
}) => {
  const config = {
    style: style
  }

  return (
    <svg className={config.style} width="149" height="47" viewBox="0 0 149 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Logo">
    <path id="Vector" opacity="0.97" d="M117.568 46.208V37.568C117.568 36.8427 117.568 36.3947 117.568 36.224C117.568 36.0107 117.568 35.8613 117.568 35.776C117.568 35.6907 117.568 35.52 117.568 35.264V35.2C117.568 34.9013 117.568 34.7307 117.568 34.688C117.568 34.6027 117.568 34.4533 117.568 34.24C117.568 33.984 117.568 33.5147 117.568 32.832V29.568C117.568 28.8427 117.568 28.3947 117.568 28.224C117.568 28.0107 117.568 27.8613 117.568 27.776C117.568 27.6907 117.568 27.52 117.568 27.264V27.2C117.568 26.9013 117.568 26.7307 117.568 26.688C117.568 26.6027 117.568 26.4533 117.568 26.24C117.568 25.984 117.568 25.5147 117.568 24.832V18.432H121.152C122.347 18.432 123.392 18.2613 124.288 17.92C125.227 17.5787 126.166 16.96 127.104 16.064C128.043 15.1253 129.131 13.824 130.368 12.16L135.296 5.504H126.529C124.865 5.504 123.712 5.90933 123.072 6.72C122.432 7.488 122.112 8.512 122.112 9.792H116.096V0.384003H148.544V5.504L140.8 15.872C140.331 16.4693 140.096 17.0027 140.096 17.472C140.096 18.112 140.63 18.432 141.697 18.432H146.753V24.832C146.753 25.5147 146.753 25.984 146.753 26.24C146.753 26.4533 146.753 26.6027 146.753 26.688C146.753 26.7307 146.753 26.9013 146.753 27.2V27.264C146.753 27.52 146.753 27.6907 146.753 27.776C146.753 27.8613 146.753 28.0107 146.753 28.224C146.753 28.3947 146.753 28.8427 146.753 29.568V32.832C146.753 33.5147 146.753 33.984 146.753 34.24C146.753 34.4533 146.753 34.6027 146.753 34.688C146.753 34.7307 146.753 34.9013 146.753 35.2V35.264C146.753 35.52 146.753 35.6907 146.753 35.776C146.753 35.8613 146.753 36.0107 146.753 36.224C146.753 36.3947 146.753 36.8427 146.753 37.568V46.208H117.568Z" fill="#FFFFEE"/>
    <path id="Vector_2" opacity="0.97" d="M89.971 46.592C86.9843 46.592 84.403 45.76 82.227 44.096C80.0937 42.3893 78.7283 40.2133 78.131 37.568C78.0883 37.3547 78.0457 37.12 78.003 36.864C77.9603 36.5653 77.9177 36.288 77.875 36.032C77.875 35.7333 77.875 35.4987 77.875 35.328V35.264C77.875 34.9653 77.875 34.7947 77.875 34.752C77.875 34.6667 77.875 34.5173 77.875 34.304C77.875 34.048 77.875 33.5573 77.875 32.832V29.568C77.875 28.8427 77.875 28.3947 77.875 28.224C77.875 28.0107 77.875 27.8613 77.875 27.776C77.875 27.6907 77.875 27.52 77.875 27.264V27.2C77.875 26.9013 77.875 26.7307 77.875 26.688C77.875 26.6027 77.875 26.4533 77.875 26.24C77.875 25.984 77.875 25.5147 77.875 24.832V16.256H89.651C89.9497 17.0667 90.3123 17.5787 90.739 17.792C91.2083 18.0053 92.1683 18.112 93.619 18.112H99.123C100.104 18.112 100.894 17.8987 101.491 17.472C102.131 17.0027 102.451 16.4053 102.451 15.68V13.184L102.195 13.12C101.939 13.4187 101.534 13.7173 100.979 14.016C100.467 14.272 99.6777 14.4 98.611 14.4H86.643C85.8323 14.4 84.8083 14.208 83.571 13.824C82.3763 13.44 81.3097 12.7787 80.371 11.84C79.475 10.8587 79.027 9.51467 79.027 7.808C79.027 5.54667 79.6243 3.86133 80.819 2.752C82.0563 1.64267 83.635 0.917334 85.555 0.576C87.475 0.192 89.4377 0 91.443 0H101.235C109.47 0 113.587 4.90667 113.587 14.72V24.832C113.587 25.5147 113.587 25.984 113.587 26.24C113.587 26.4533 113.587 26.6027 113.587 26.688C113.587 26.7307 113.587 26.9013 113.587 27.2V27.264C113.587 27.52 113.587 27.6907 113.587 27.776C113.587 27.8613 113.587 28.0107 113.587 28.224C113.587 28.3947 113.587 28.8427 113.587 29.568V32.832C113.587 33.5147 113.587 33.984 113.587 34.24C113.587 34.4533 113.587 34.6027 113.587 34.688C113.587 34.7307 113.587 34.9013 113.587 35.2V35.264C113.587 35.52 113.566 35.7973 113.523 36.096C113.523 36.3947 113.502 36.672 113.459 36.928C113.416 37.1413 113.374 37.3547 113.331 37.568C112.734 40.2133 111.347 42.3893 109.171 44.096C107.038 45.76 104.478 46.592 101.491 46.592H89.971ZM93.619 10.176H98.931C100.723 10.176 101.619 9.38667 101.619 7.808C101.619 7.168 101.406 6.63467 100.979 6.208C100.552 5.73867 99.891 5.504 98.995 5.504H93.555C92.659 5.504 91.9977 5.73867 91.571 6.208C91.1443 6.63467 90.931 7.168 90.931 7.808C90.931 9.38667 91.827 10.176 93.619 10.176Z" fill="#FFFFEE"/>
    <path id="Vector_3" opacity="0.97" d="M44.625 46.208V37.568C44.625 36.8427 44.625 36.3947 44.625 36.224C44.625 36.0107 44.625 35.8613 44.625 35.776C44.625 35.6907 44.625 35.52 44.625 35.264V35.2C44.625 34.9013 44.625 34.7307 44.625 34.688C44.625 34.6027 44.625 34.4533 44.625 34.24C44.625 33.984 44.625 33.5147 44.625 32.832V29.568C44.625 28.8427 44.625 28.3947 44.625 28.224C44.625 28.0107 44.625 27.8613 44.625 27.776C44.625 27.6907 44.625 27.52 44.625 27.264V27.2C44.625 26.9013 44.625 26.7307 44.625 26.688C44.625 26.6027 44.625 26.4533 44.625 26.24C44.625 25.984 44.625 25.5147 44.625 24.832V18.432H49.809C51.4303 18.432 52.5397 18.048 53.137 17.28C53.777 16.512 54.097 15.488 54.097 14.208V10.304H47.633V5.824C48.8703 5.824 49.9583 5.54667 50.897 4.992C51.8783 4.39467 52.6463 3.66933 53.201 2.816C53.7983 1.96267 54.097 1.152 54.097 0.384003H65.553V14.208C65.553 15.488 65.873 16.512 66.513 17.28C67.153 18.048 68.2623 18.432 69.841 18.432H74.193V24.832C74.193 25.5147 74.193 25.984 74.193 26.24C74.193 26.4533 74.193 26.6027 74.193 26.688C74.193 26.7307 74.193 26.9013 74.193 27.2V27.264C74.193 27.52 74.193 27.6907 74.193 27.776C74.193 27.8613 74.193 28.0107 74.193 28.224C74.193 28.3947 74.193 28.8427 74.193 29.568V32.832C74.193 33.5147 74.193 33.984 74.193 34.24C74.193 34.4533 74.193 34.6027 74.193 34.688C74.193 34.7307 74.193 34.9013 74.193 35.2V35.264C74.193 35.52 74.193 35.6907 74.193 35.776C74.193 35.8613 74.193 36.0107 74.193 36.224C74.193 36.3947 74.193 36.8427 74.193 37.568V46.208H44.625Z" fill="#FFFFEE"/>
    <path id="Vector_4" opacity="0.97" d="M0 46.208V37.568C0 36.8427 0 36.3947 0 36.224C0 36.0107 0 35.8613 0 35.776C0 35.6907 0 35.52 0 35.264V35.2C0 34.9013 0 34.7307 0 34.688C0 34.6027 0 34.4533 0 34.24C0 33.984 0 33.5147 0 32.832V29.568C0 28.8427 0 28.3947 0 28.224C0 28.0107 0 27.8613 0 27.776C0 27.6907 0 27.52 0 27.264V27.2C0 26.9013 0 26.7307 0 26.688C0 26.6027 0 26.4533 0 26.24C0 25.984 0 25.5147 0 24.832V18.432C2.85867 18.432 4.288 17.024 4.288 14.208V10.112C4.288 7.04 2.85867 5.504 0 5.504V0.384003H18.112V5.824C15.424 5.824 14.08 7.25333 14.08 10.112V11.392L22.848 7.36C23.232 7.14667 23.424 6.86934 23.424 6.528C23.424 6.05867 23.104 5.824 22.464 5.824H21.248V0.384003H39.296V5.504H38.656C38.3147 5.504 37.9947 5.52533 37.696 5.568C37.3973 5.61067 36.992 5.73867 36.48 5.952C35.968 6.16534 35.2 6.50667 34.176 6.976L29.44 9.088L33.408 13.44C34.7307 14.8907 35.7333 15.9787 36.416 16.704C37.1413 17.3867 37.7387 17.8347 38.208 18.048C38.6773 18.2613 39.168 18.368 39.68 18.368H40.896V46.208H21.824V37.568C21.824 36.8427 21.824 36.3947 21.824 36.224C21.824 36.0107 21.824 35.8613 21.824 35.776C21.824 35.6907 21.824 35.52 21.824 35.264V35.2C21.824 34.9013 21.824 34.7307 21.824 34.688C21.824 34.6027 21.824 34.4533 21.824 34.24C21.824 33.984 21.824 33.5147 21.824 32.832V29.568C21.824 28.8427 21.824 28.3947 21.824 28.224C21.824 28.0107 21.824 27.8613 21.824 27.776C21.824 27.6907 21.824 27.52 21.824 27.264V27.2C21.824 26.9013 21.824 26.7307 21.824 26.688C21.824 26.6027 21.824 26.4533 21.824 26.24C21.824 25.984 21.824 25.5147 21.824 24.832V18.112H22.592C23.5307 18.112 24 17.8347 24 17.28C24 17.024 23.936 16.7893 23.808 16.576C23.68 16.32 23.3173 15.8507 22.72 15.168L20.864 12.928L14.336 16.064C14.336 16.7467 14.6987 17.2587 15.424 17.6C16.192 17.9413 17.088 18.112 18.112 18.112V46.208H0Z" fill="#FFFFEE"/>
    </g>
    </svg>
  )
}

export default LogoIcon