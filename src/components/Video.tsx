import { useGetLessonBySlugQuery } from '../graphql/generated';
import { Player, Youtube, DefaultUi } from '@vime/react';
import { LoadingLesson } from './Loading/LoadingLesson';
import { Button } from './Button';
import { Card } from './Card';

import '@vime/core/themes/default.css';

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    }
  });

  if (!data || !data.lesson) {
    return <LoadingLesson />;
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto xl:text-start">
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-16">
          <div className="flex-1 flex flex-col xl:block">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-stretch xl:items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt={data.lesson.teacher.name}
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <Button type="primary" href="#" />
            <Button type="secondary" href="#" />
          </div>
        </div>

        <div className="gap-8 mt-20 grid sm:grid-cols-2">
          <Card type="primary" href="#" />
          <Card type="secondary" href="#" />
        </div>
      </div>
    </div>
  );
}
