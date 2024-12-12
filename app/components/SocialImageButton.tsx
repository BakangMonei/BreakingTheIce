import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { styles } from '../styles/AuthStyles';

export default function SocialImageButton({ source, onPress }) {
  return (
    <TouchableOpacity style={styles.socialImageButton} onPress={onPress}>
      <Image source={source} style={styles.socialIcon} />
    </TouchableOpacity>
  );
}