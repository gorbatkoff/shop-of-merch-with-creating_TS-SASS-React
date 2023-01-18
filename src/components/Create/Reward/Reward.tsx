import React from 'react';

import Image from './RewardByType/Image';
import Video from './RewardByType/Video';
import Audio from './RewardByType/Audio';
import File from './RewardByType/File';
import Link from './RewardByType/Link';
import Text from './RewardByType/Text';
import Custom from './RewardByType/Custom';

type Props = {
    reward: string
}

const styles = {
    margin: "1em 0",
    fontWeight: "bold",
    color: "#0034BB"
}

function Reward({ reward }: Props) {
    return (
        <div style={styles}>
            {(reward === 'image') ? <Image /> :
                    (reward === 'video') ? <Video /> :
                        (reward === 'audio') ? <Audio /> :
                            (reward === 'file') ? <File /> :
                                (reward === 'link') ? <Link /> :
                                    (reward === 'text') ? <Text /> :
                                        (reward === 'custom') ? <Custom /> : <Image />}
        </div>
    )
}

export default Reward