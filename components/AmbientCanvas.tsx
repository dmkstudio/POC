'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const vertex = `
varying vec2 vUv;
void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }
`;
const fragment = `
uniform float uTime;
varying vec2 vUv;
float noise(vec2 p){ return sin(p.x*5.2+uTime*.12)*sin(p.y*4.1-uTime*.09); }
void main(){
  vec2 p=vUv-.5;
  float d=length(p);
  float glow=.17/(d+.18);
  float n=noise(vUv*2.0)*.035;
  vec3 dark=vec3(.018,.019,.017);
  vec3 warm=vec3(.29,.20,.08);
  vec3 col=dark+warm*(glow*.18+n);
  gl_FragColor=vec4(col,clamp(.55-d*.65,0.,.5));
}
`;
function Plane(){
  const ref=useRef<THREE.ShaderMaterial>(null);
  useFrame((_,dt)=>{ if(ref.current) ref.current.uniforms.uTime.value+=dt; });
  return <mesh scale={[2,2,1]}><planeGeometry args={[2,2,1,1]}/><shaderMaterial ref={ref} transparent vertexShader={vertex} fragmentShader={fragment} uniforms={{uTime:{value:0}}}/></mesh>;
}
export default function AmbientCanvas(){
  return <div className="ambient-canvas" aria-hidden><Canvas camera={{position:[0,0,1]}} dpr={[1,1.4]}><Plane/></Canvas></div>;
}
