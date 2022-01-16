import React from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faBirthdayCake,
  faHeart,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons'
import { Profile } from '../../API'

type Props = {
  profile?: Profile
  onSubmit: (profile: Profile) => void
  onError: () => void
}

const ProfileForm: React.FC<Props> = ({ profile, onSubmit, onError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>()

  return (
    <form className="mb-8" onSubmit={handleSubmit(onSubmit, onError)}>
      <input
        type="hidden"
        {...register('id', { required: true })}
        defaultValue={profile?.id}
      />
      <label className="block mb-4">
        <span>自己紹介</span>
        <textarea
          className="mt-2 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-100 focus:ring-1"
          rows={3}
          {...register('introduction', { required: true })}
          defaultValue={profile?.introduction}
        />
        <small className="mb-2 text-red-600 block">
          {errors.introduction && <span>This field is required</span>}
        </small>
      </label>
      <label className="block mb-4">
        <span>
          <FontAwesomeIcon icon={faHome} size="lg" className="mr-2" /> 居住地
        </span>
        <textarea
          className="mt-2 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-100 focus:ring-1"
          rows={1}
          {...register('residence', { required: true })}
          defaultValue={profile?.residence}
        />
        <small className="mb-2 text-red-600 block">
          {errors.residence && <span>This field is required</span>}
        </small>
      </label>
      <label className="block mb-4">
        <span>
          <FontAwesomeIcon icon={faMapMarker} size="lg" className="mr-2" />{' '}
          出身地
        </span>
        <textarea
          className="mt-2 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-100 focus:ring-1"
          rows={1}
          {...register('birthplace', { required: true })}
          defaultValue={profile?.birthplace}
        />
        <small className="mb-2 text-red-600 block">
          {errors.birthplace && <span>This field is required</span>}
        </small>
      </label>
      <label className="block mb-4">
        <span>
          <FontAwesomeIcon icon={faBirthdayCake} size="lg" className="mr-2" />{' '}
          生年月日
        </span>
        <textarea
          className="mt-2 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-100 focus:ring-1"
          rows={1}
          {...register('birthday', { required: true })}
          defaultValue={profile?.birthday}
        />
        <small className="mb-2 text-red-600 block">
          {errors.birthday && <span>This field is required</span>}
        </small>
      </label>
      <label className="block mb-4">
        <span>
          <FontAwesomeIcon icon={faHeart} size="lg" className="mr-2" /> 趣味
        </span>
        <textarea
          className="mt-2 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-100 focus:ring-1"
          rows={1}
          {...register('hobby', { required: true })}
          defaultValue={profile?.hobby}
        />
        <small className="mb-2 text-red-600 block">
          {errors.hobby && <span>This field is required</span>}
        </small>
      </label>
      <input
        type="submit"
        value="Save"
        className="mt-4 px-6 py-2 text-white bg-accent rounded hover:bg-accent-dark"
      />
    </form>
  )
}

export default ProfileForm
