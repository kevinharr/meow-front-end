//types
import { Profile } from '../../types/models'
import ProfileCard from '../../components/ProfileCard/ProfileCard';
// types
import { VoteManagerFormData } from '../../types/forms'

interface ProfilesProps {
	profiles: Profile[];
  handleVote: (formData: VoteManagerFormData) => void;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <main className='list'>
      {props.profiles.map((profile: Profile) =>
        <ProfileCard
          key={profile.id.toString()}
          profile={profile}
          handleVote={props.handleVote}
        />
      )}
    </main>
  )
 
export default Profiles
