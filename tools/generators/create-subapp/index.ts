import {
  Tree,
  formatFiles,
  installPackagesTask,
  names,
  getWorkspaceLayout,
  joinPathFragments,
  generateFiles,
  updateJson
} from '@nrwl/devkit';

interface Schema {
  name: string;
}

export default async function (tree: Tree, schema: Schema) {
  const { name, className, constantName, fileName } = names(schema.name);
  const { libsDir } = getWorkspaceLayout(tree);
  const subAppRoot = joinPathFragments(libsDir, fileName);

  // Add the files
  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    subAppRoot, // destination path of the files
    {
      name,
      className,
      constantName,
      fileName,
      tmpl: ''
    }
  );

  // Add an entry in the Typescript configuration.
  updateJson(tree, 'tsconfig.base.json', (tsConfig) => {
    tsConfig.compilerOptions = tsConfig.compilerOptions ?? {};
    tsConfig.compilerOptions.paths = tsConfig.compilerOptions.paths ?? {};
    tsConfig.compilerOptions.paths[`${name}`] = [
      `packages/${name}/src/index.ts`
    ];
    return tsConfig;
  });

  // await libraryGenerator(tree, { name: schema.name });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
