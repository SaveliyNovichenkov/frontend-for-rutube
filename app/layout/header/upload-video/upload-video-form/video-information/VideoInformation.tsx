import React from 'react';
import Image from 'next/image'
import s from './VideoInformation.module.scss'
import {VideoInformationProps} from "./VideoInformation.props";
import Link from "next/link";

const VideoInformation = ({thumbnailPath, videoId, fileName, isUploaded}: VideoInformationProps) => {
    return (
        <div className={s.info}>
            {!thumbnailPath ? (
                <div className={s.thumbnail}>
                    {isUploaded
                        ? "Видео загружается"
                        : "Нужно загрузить превью"
                    }
                </div>
            ) : (
                <Image
                    src={process.env.NEXT_PUBLIC_REACT_APP_URI + "/" + thumbnailPath}
                    width={344}
                    height={198}
                    alt="Картинка превью для видео"
                    layout="responsive"
                />
            )}
            <div className={s.details}>
                <div>
                    <span>
                        Ссылка на видео
                    </span>
                    <span>
                        <Link href={`/v/${videoId}`}>
                        <a>http://localhost:4200/v/{videoId}</a>
                        </Link>
                    </span>
                </div>
                <div>
                    <span>Название файла</span>
                    <span>{fileName}</span>
                </div>
            </div>
        </div>
    );
};

export default VideoInformation;