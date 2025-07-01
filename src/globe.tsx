/* eslint-disable react/static-property-placement */
/* eslint-disable no-return-assign */
/* eslint-disable lines-between-class-members */
"use client";

import { OrbitControls } from "@/OrbitControls";
import React, { PureComponent } from "react";
import {
  AmbientLight,
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  Texture,
  TextureLoader,
  WebGLRenderer,
} from "three";
import clsx from "clsx";

type GlobeTexture = "globe" | "grid";

interface GlobeProps {
  height?: number;
  width?: number;
  texture?: GlobeTexture;
  className?: string;
}

class Globe extends PureComponent<GlobeProps> {
  public static defaultProps: GlobeProps = {
    height: 200,
    width: 200,
    texture: "grid",
  };

  private scene!: Scene;
  private renderer!: WebGLRenderer;
  private camera!: PerspectiveCamera;
  private ambientLight!: AmbientLight;
  private directionalLight!: DirectionalLight;
  private earthTexture!: Texture;
  private gridTexture!: Texture;
  private geometry!: SphereGeometry;
  private material!: MeshPhongMaterial;
  private sphere!: Mesh;
  private controls!: OrbitControls;
  private container!: HTMLDivElement;

  private get ratio(): number {
    const {
      width = Globe.defaultProps.width,
      height = Globe.defaultProps.height,
    } = this.props;
    if (!width || !height) return 1;
    return width / height;
  }

  private get activeTexture(): Texture {
    const { texture } = this.props;
    return texture === "globe" ? this.earthTexture : this.gridTexture;
  }

  public componentDidMount = () => {
    const { width, height, texture } = this.props;

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(68, this.ratio, 0.1, 1000);

    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width!, height!);
    this.container.appendChild(this.renderer.domElement);

    this.ambientLight = new AmbientLight(0x8888888);
    this.ambientLight.intensity = texture === "globe" ? 0.8 : 1;
    this.scene.add(this.ambientLight);

    this.directionalLight = new DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(10, 10, 5);
    this.scene.add(this.directionalLight);

    this.gridTexture = new TextureLoader().load("/grid-texture-2.png");
    this.earthTexture = new TextureLoader().load("/earth-texture.jpg");

    this.geometry = new SphereGeometry(5, 50, 50);
    this.material = new MeshPhongMaterial({
      map: this.activeTexture,
      color: 0xffffff,
      specular: 0x33333,
      shininess: 25,
      transparent: true,
    });

    this.sphere = new Mesh(this.geometry, this.material);
    this.scene.add(this.sphere);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.camera.position.set(0, 0, 10);
    this.controls.update();

    this.renderScene();
  };

  public componentDidUpdate = ({ texture: oldTextureType }: GlobeProps) => {
    const { texture: currentTextureType } = this.props;

    if (currentTextureType !== oldTextureType) {
      this.material.map = this.activeTexture;
      this.material.map.needsUpdate = true;
      this.material.needsUpdate = true;
      this.ambientLight.intensity = currentTextureType === "globe" ? 0.3 : 1;
    }
  };

  private renderScene = () => {
    this.renderer.render(this.scene, this.camera);
    this.sphere.rotation.y -= 0.02;
    this.controls.update();
    requestAnimationFrame(this.renderScene);
  };

  public render = () => (
    <div
      className={clsx(
        this.props.className,
        "focus:outline-none active:outline-none"
      )}
      ref={(ref) => {
        if (ref) this.container = ref;
      }}
    />
  );
}

export { Globe };
export default Globe;
